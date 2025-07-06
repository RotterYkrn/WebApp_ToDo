import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { type Category, type DailyPlan, type DailyPlanItem, type Habit, type Prisma, PrismaClient, type Todo, type UserSettings } from "@prisma/client"; // Habit, Category, UserSettings, DailyPlan, DailyPlanItem 型をインポート
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"; // PrismaClientKnownRequestError をインポート
import cors from "cors";
import express, { type Request, type Response, type RequestHandler, type NextFunction } from "express"; // RequestHandler, NextFunction もインポート
import session from "express-session"; // express-session をインポート
import { loginUser, signupUser } from "./auth.js"; // auth.ts から認証関数をインポート

type NoParam = Record<string, never>;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// セッションミドルウェアの設定
app.use(session({
	// biome-ignore lint/complexity/useLiteralKeys: tsc rants about this (TS4111)
    secret: process.env['SESSION_SECRET'] || 'your_secret_key', // 秘密鍵。環境変数で設定することを推奨
    resave: false, // セッションストアにセッションを強制的に再保存しない
    saveUninitialized: false, // 初期化されていないセッションを保存しない
    cookie: {
		// biome-ignore lint/complexity/useLiteralKeys: tsc rants about this (TS4111)
        secure: process.env['NODE_ENV'] === 'production', // HTTPSでのみCookieを送信 (本番環境ではtrue)
        maxAge: 1000 * 60 * 60 * 24 // Cookieの有効期限 (例: 24時間)
    }
}));

// セッションにユーザーIDを保存するための型拡張
declare module 'express-session' {
    interface SessionData {
        userId?: number;
    }
}

/**
 * 認証ミドルウェア
 * セッションにユーザーIDが存在するかを確認し、存在しない場合は401 Unauthorizedエラーを返す
 */
const authenticate: RequestHandler = (req, res, next) => {
    if (req.session?.userId) {
        // 認証済みの場合、次のミドルウェアまたはルートハンドラに進む
        next();
    } else {
        // 未認証の場合、401 Unauthorized エラーを返す
        res.status(401).json({ message: "Unauthorized" });
    }
};



const prisma = new PrismaClient();

type TodoCreateRequestBody = Prisma.TodoCreateInput & Prisma.TodoUncheckedCreateInput;
type TodoUpdateRequestBody = Prisma.TodoUpdateInput & Prisma.TodoUncheckedUpdateInput;

// Habit の作成と更新に使用するリクエストボディの型定義
type HabitCreateRequestBody = Prisma.HabitCreateInput & Prisma.HabitUncheckedCreateInput;
type HabitUpdateRequestBody = Prisma.HabitUpdateInput & Prisma.HabitUncheckedUpdateInput;

// Category の作成と更新に使用するリクエストボディの型定義
type CategoryCreateRequestBody = Prisma.CategoryCreateInput & Prisma.CategoryUncheckedCreateInput;
type CategoryUpdateRequestBody = Prisma.CategoryUpdateInput & Prisma.CategoryUncheckedUpdateInput;

// UserSettings の更新に使用するリクエストボディの型定義
type UserSettingsUpdateRequestBody = Prisma.UserSettingsUpdateInput & Prisma.UserSettingsUncheckedUpdateInput;

// DailyPlan および DailyPlanItem の作成と更新に使用するリクエストボディの型定義
type DailyPlanCreateRequestBody = Prisma.DailyPlanCreateInput & Prisma.DailyPlanUncheckedCreateInput;
type DailyPlanItemCreateRequestBody = Prisma.DailyPlanItemCreateInput & Prisma.DailyPlanItemUncheckedCreateInput;
type DailyPlanItemUpdateRequestBody = Prisma.DailyPlanItemUpdateInput & Prisma.DailyPlanItemUncheckedUpdateInput;

/**
 * ToDo リストを取得する API エンドポイント
 * @route GET /api/todos
 * @returns {Promise<void>} ToDo アイテムの配列
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.get("/api/todos", authenticate, (async (_, res) => {
	try {
		const allTodos = await prisma.todo.findMany();
		res.json(allTodos);
	} catch (error: unknown) {
		console.error("Error fetching todos:", error);
		res.status(500).json({ message: "Failed to fetch todos" });
	}
}) as RequestHandler<NoParam, Todo[] | { message: string }, NoParam, NoParam>);

/**
 * 新しい ToDo を作成する API エンドポイント
 * @route POST /api/todos
 * @param {TodoCreateRequestBody} req.body - ToDo のデータ
 * @returns {Promise<void>}
 * @throws {Error} 400 - 無効な入力データの場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.post("/api/todos", authenticate, (async (req, res) => {
    try {
        const { title, description, priority, categoryId, completed, userId } = req.body;

        // 必須フィールドのバリデーション
        if (!title || userId === undefined) {
            return res.status(400).json({ message: "Title and userId are required" });
        }

        // 型変換とデフォルト値の設定
        const data = {
            title: String(title),
            description: description ? String(description) : null,
            priority: priority !== undefined ? Number(priority) : null,
            categoryId: categoryId !== undefined ? Number(categoryId) : null,
            completed: completed !== undefined ? Boolean(completed) : false,
            userId: Number(userId),
        };

        // userIdが有効な数値かチェック
        if (Number.isNaN(data.userId)) {
            res.status(400).json({ message: "Invalid userId" });
            return;
        }
        // categoryIdが有効な数値かチェック (存在する場合)
        if (data.categoryId !== null && Number.isNaN(data.categoryId)) {
            res.status(400).json({ message: "Invalid categoryId" });
            return;
        }
        // priorityが有効な数値かチェック (存在する場合)
        if (data.priority !== null && Number.isNaN(data.priority)) {
            res.status(400).json({ message: "Invalid priority" });
            return;
        }

        const newTodo = await prisma.todo.create({ data });
        res.status(201).json(newTodo); // 201 Created を返す

    } catch (error) { // error を unknown 型として捕捉
        console.error("Error creating todo:", error);
        // Prismaエラーなど、その他のサーバーエラー
        res.status(500).json({ message: "Failed to create Todo" });
    }

    return;
}) as RequestHandler<NoParam, Todo | { message: string }, TodoCreateRequestBody, NoParam>);

/**
 * 既存の ToDo を更新する API エンドポイント
 * @route PUT /api/todos/:id
 * @param {string} id - 更新する ToDo の ID (URL パラメータ)
 * @param {TodoUpdateRequestBody} req.body - 更新する ToDo のデータ
 * @returns {Promise<void>}
 * @throws {Error} 400 - 無効な入力データまたは無効な ID の場合
 * @throws {Error} 404 - 指定された ID の ToDo が見つからない場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.put("/api/todos/:id", authenticate, (async (req, res) => {
	try {
		const { id } = req.params;
		const todoId = Number(id);

		// IDが有効な数値かチェック
		if (Number.isNaN(todoId)) {
			res.status(400).json({ message: "Invalid Todo ID" });
			return;
		}

		const { title, description, priority, categoryId, completed } = req.body;

		// 更新データオブジェクトを構築
		const updateData: {
			// TodoUpdateInput 型を明示
			title?: string;
			description?: string | null;
			priority?: number | null;
			categoryId?: number | null;
			completed?: boolean;
		} = {};
		if (title !== undefined) updateData.title = String(title);
		if (description !== undefined)
			updateData.description = description ? String(description) : null;
		if (priority !== undefined) {
			const numPriority = Number(priority);
			if (Number.isNaN(numPriority)) {
				res.status(400).json({ message: "Invalid priority value" });
				return;
			}
			updateData.priority = numPriority;
		}
		if (categoryId !== undefined) {
			const numCategoryId = Number(categoryId);
			if (Number.isNaN(numCategoryId)) {
				res.status(400).json({ message: "Invalid categoryId value" });
				return;
			}
			updateData.categoryId = numCategoryId;
		}
		if (completed !== undefined) updateData.completed = Boolean(completed);

		// 更新データが空の場合は何もしない
		if (Object.keys(updateData).length === 0) {
			res.status(400).json({ message: "No update data provided" });
			return;
		}

		const updatedTodo = await prisma.todo.update({
			where: { id: todoId },
			data: updateData,
		});
		res.json(updatedTodo);
	} catch (error: unknown) {
		// error を unknown 型として捕捉
		console.error("Error updating todo:", error);
		if (
			error instanceof PrismaClientKnownRequestError &&
			error.code === "P2025"
		) {
			// PrismaClientKnownRequestError かつ P2025 エラーの場合
			res.status(404).json({ message: "Todo not found" });
		} else {
			res.status(500).json({ message: "Failed to update Todo" });
		}
	}

	return;
}) as RequestHandler<{ id: string }, Todo | { message: string }, TodoUpdateRequestBody, unknown>);

/**
 * 既存の ToDo を削除する API エンドポイント
 * @route DELETE /api/todos/:id
 * @param {string} id - 削除する ToDo の ID (URL パラメータ)
 * @returns {Promise<object>} 成功メッセージ
 * @throws {Error} 400 - 無効な ID の場合
 * @throws {Error} 404 - 指定された ID の ToDo が見つからない場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.delete("/api/todos/:id", authenticate, (async (req: Request<{ id: string }>, res: Response) => {
	try {
		const { id } = req.params;
		const todoId = Number(id);

		// IDが有効な数値かチェック
		if (Number.isNaN(todoId)) {
			res.status(400).json({ message: "Invalid Todo ID" });
			return;
		}

		await prisma.todo.delete({
			where: { id: todoId },
		});
		res.json({ message: "Todo deleted successfully" });
	} catch (error: unknown) {
		// error を unknown 型として捕捉
		console.error("Error deleting todo:", error);
		if (
			error instanceof PrismaClientKnownRequestError &&
			error.code === "P2025"
		) {
			// PrismaClientKnownRequestError かつ P2025 エラーの場合
			res.status(404).json({ message: "Todo not found" });
		} else {
			res.status(500).json({ message: "Failed to delete Todo" });
		}
	}
}) as RequestHandler<{ id: string }, { message: string }, Prisma.TodoWhereUniqueInput, NoParam>);

/**
 * 習慣リストを取得する API エンドポイント (ユーザー別)
 * @route GET /api/users/:userId/habits
 * @param {string} userId - 習慣を取得するユーザーの ID (URL パラメータ)
 * @returns {Promise<void>} 習慣アイテムの配列
 * @throws {Error} 400 - 無効なユーザー ID の場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.get("/api/users/:userId/habits", authenticate, (async (req, res) => {
	try {
		const { userId } = req.params;
		const numericUserId = Number(userId);

		// ユーザーIDが有効な数値かチェック
		if (Number.isNaN(numericUserId)) {
			res.status(400).json({ message: "Invalid User ID" });
			return;
		}

		const userHabits = await prisma.habit.findMany({
			where: { userId: numericUserId },
		});
		res.json(userHabits);
	} catch (error: unknown) {
		console.error("Error fetching habits:", error);
		res.status(500).json({ message: "Failed to fetch habits" });
	}
}) as RequestHandler<{ userId: string }, Habit[] | { message: string }, NoParam, NoParam>);

/**
 * 新しい習慣を作成する API エンドポイント
 * @route POST /api/habits
 * @param {HabitCreateRequestBody} req.body - 習慣のデータ
 * @returns {Promise<void>}
 * @throws {Error} 400 - 無効な入力データの場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.post("/api/habits", authenticate, (async (req, res) => {
    try {
        const { userId, title, description, categoryId, autoInclude } = req.body;

        // 必須フィールドのバリデーション
        if (userId === undefined || !title) {
            return res.status(400).json({ message: "userId and title are required" });
        }

        // 型変換とデフォルト値の設定
        const data = {
            userId: Number(userId),
            title: String(title),
            description: description ? String(description) : null,
            categoryId: categoryId !== undefined ? Number(categoryId) : null,
            autoInclude: autoInclude !== undefined ? Boolean(autoInclude) : false,
        };

        // userIdが有効な数値かチェック
        if (Number.isNaN(data.userId)) {
            res.status(400).json({ message: "Invalid userId" });
            return;
        }
        // categoryIdが有効な数値かチェック (存在する場合)
        if (data.categoryId !== null && Number.isNaN(data.categoryId)) {
            res.status(400).json({ message: "Invalid categoryId" });
            return;
        }

        const newHabit = await prisma.habit.create({ data });
        res.status(201).json(newHabit); // 201 Created を返す

    } catch (error: unknown) {
        console.error("Error creating habit:", error);
        res.status(500).json({ message: "Failed to create Habit" });
    }

    return;
}) as RequestHandler<NoParam, Habit | { message: string }, HabitCreateRequestBody, NoParam>);

/**
 * 既存の習慣を更新する API エンドポイント
 * @route PUT /api/habits/:id
 * @param {string} id - 更新する習慣の ID (URL パラメータ)
 * @param {HabitUpdateRequestBody} req.body - 更新する習慣のデータ
 * @returns {Promise<void>}
 * @throws {Error} 400 - 無効な入力データまたは無効な ID の場合
 * @throws {Error} 404 - 指定された ID の習慣が見つからない場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.put("/api/habits/:id", authenticate, (async (req, res) => {
	try {
		const { id } = req.params;
		const habitId = Number(id);

		// IDが有効な数値かチェック
		if (Number.isNaN(habitId)) {
			res.status(400).json({ message: "Invalid Habit ID" });
			return;
		}

		const { title, description, categoryId, autoInclude } = req.body;

		// 更新データオブジェクトを構築
		const updateData: {
			title?: string;
			description?: string | null;
			categoryId?: number | null;
			autoInclude?: boolean;
		} = {};
		if (title !== undefined) updateData.title = String(title);
		if (description !== undefined)
			updateData.description = description ? String(description) : null;
		if (categoryId !== undefined) {
			const numCategoryId = Number(categoryId);
			if (Number.isNaN(numCategoryId)) {
				res.status(400).json({ message: "Invalid categoryId value" });
				return;
			}
			updateData.categoryId = numCategoryId;
		}
		if (autoInclude !== undefined) updateData.autoInclude = Boolean(autoInclude);

		// 更新データが空の場合は何もしない
		if (Object.keys(updateData).length === 0) {
			res.status(400).json({ message: "No update data provided" });
			return;
		}

		const updatedHabit = await prisma.habit.update({
			where: { id: habitId },
			data: updateData,
		});
		res.json(updatedHabit);
	} catch (error: unknown) {
		console.error("Error updating habit:", error);
		if (
			error instanceof PrismaClientKnownRequestError &&
			error.code === "P2025"
		) {
			res.status(404).json({ message: "Habit not found" });
		} else {
			res.status(500).json({ message: "Failed to update Habit" });
		}
	}

	return;
}) as RequestHandler<{ id: string }, Habit | { message: string }, HabitUpdateRequestBody, unknown>);

/**
 * 既存の習慣を削除する API エンドポイント
 * @route DELETE /api/habits/:id
 * @param {string} id - 削除する習慣の ID (URL パラメータ)
 * @returns {Promise<object>} 成功メッセージ
 * @throws {Error} 400 - 無効な ID の場合
 * @throws {Error} 404 - 指定された ID の習慣が見つからない場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.delete("/api/habits/:id", authenticate, (async (req: Request<{ id: string }>, res: Response) => {
	try {
		const { id } = req.params;
		const habitId = Number(id);

		// IDが有効な数値かチェック
		if (Number.isNaN(habitId)) {
			res.status(400).json({ message: "Invalid Habit ID" });
			return;
		}

		await prisma.habit.delete({
			where: { id: habitId },
		});
		res.json({ message: "Habit deleted successfully" });
	} catch (error: unknown) {
		console.error("Error deleting habit:", error);
		if (
			error instanceof PrismaClientKnownRequestError &&
			error.code === "P2025"
		) {
			res.status(404).json({ message: "Habit not found" });
		} else {
			res.status(500).json({ message: "Failed to delete Habit" });
		}
	}
}) as RequestHandler<{ id: string }, { message: string }, Prisma.HabitWhereUniqueInput, NoParam>);

/**
 * カテゴリーを取得する API エンドポイント (全件)
 * @route GET /api/categories
 * @returns {Promise<void>} カテゴリーアイテムの配列
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.get("/api/categories", authenticate, (async (_, res) => {
	try {
		const allCategories = await prisma.category.findMany();
		res.json(allCategories);
	} catch (error: unknown) {
		console.error("Error fetching categories:", error);
		res.status(500).json({ message: "Failed to fetch categories" });
	}
}) as RequestHandler<NoParam, Category[] | { message: string }, NoParam, NoParam>);

/**
 * 新しいカテゴリーを作成する API エンドポイント
 * @route POST /api/categories
 * @param {CategoryCreateRequestBody} req.body - カテゴリーのデータ
 * @returns {Promise<void>}
 * @throws {Error} 400 - 無効な入力データの場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.post("/api/categories", authenticate, (async (req, res) => {
    try {
        const { name } = req.body;

        // 必須フィールドのバリデーション
        if (!name) {
            return res.status(400).json({ message: "name is required" });
        }

        // 型変換
        const data = {
            name: String(name),
        };

        const newCategory = await prisma.category.create({ data });
        res.status(201).json(newCategory); // 201 Created を返す

    } catch (error: unknown) {
        console.error("Error creating category:", error);
        res.status(500).json({ message: "Failed to create Category" });
    }

    return;
}) as RequestHandler<NoParam, Category | { message: string }, CategoryCreateRequestBody, NoParam>);

/**
 * 既存のカテゴリーを更新する API エンドポイント
 * @route PUT /api/categories/:id
 * @param {string} id - 更新するカテゴリーの ID (URL パラメータ)
 * @param {CategoryUpdateRequestBody} req.body - 更新するカテゴリーのデータ
 * @returns {Promise<void>}
 * @throws {Error} 400 - 無効な入力データまたは無効な ID の場合
 * @throws {Error} 404 - 指定された ID のカテゴリーが見つからない場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.put("/api/categories/:id", authenticate, (async (req, res) => {
	try {
		const { id } = req.params;
		const categoryId = Number(id);

		// IDが有効な数値かチェック
		if (Number.isNaN(categoryId)) {
			res.status(400).json({ message: "Invalid Category ID" });
			return;
		}

		const { name } = req.body;

		// 更新データオブジェクトを構築
		const updateData: {
			name?: string;
		} = {};
		if (name !== undefined) updateData.name = String(name);

		// 更新データが空の場合は何もしない
		if (Object.keys(updateData).length === 0) {
			res.status(400).json({ message: "No update data provided" });
			return;
		}

		const updatedCategory = await prisma.category.update({
			where: { id: categoryId },
			data: updateData,
		});
		res.json(updatedCategory);
	} catch (error: unknown) {
		console.error("Error updating category:", error);
		if (
			error instanceof PrismaClientKnownRequestError &&
			error.code === "P2025"
		) {
			res.status(404).json({ message: "Category not found" });
		} else {
			res.status(500).json({ message: "Failed to update Category" });
		}
	}

	return;
}) as RequestHandler<{ id: string }, Category | { message: string }, CategoryUpdateRequestBody, unknown>);

/**
 * 既存のカテゴリーを削除する API エンドポイント
 * @route DELETE /api/categories/:id
 * @param {string} id - 削除するカテゴリーの ID (URL パラメータ)
 * @returns {Promise<object>} 成功メッセージ
 * @throws {Error} 400 - 無効な ID の場合
 * @throws {Error} 404 - 指定された ID のカテゴリーが見つからない場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.delete("/api/categories/:id", authenticate, (async (req: Request<{ id: string }>, res: Response) => {
	try {
		const { id } = req.params;
		const categoryId = Number(id);

		// IDが有効な数値かチェック
		if (Number.isNaN(categoryId)) {
			res.status(400).json({ message: "Invalid Category ID" });
			return;
		}

		await prisma.category.delete({
			where: { id: categoryId },
		});
		res.json({ message: "Category deleted successfully" });
	} catch (error: unknown) {
		console.error("Error deleting category:", error);
		if (
			error instanceof PrismaClientKnownRequestError &&
			error.code === "P2025"
		) {
			res.status(404).json({ message: "Category not found" });
		} else {
			res.status(500).json({ message: "Failed to delete Category" });
		}
	}
}) as RequestHandler<{ id: string }, { message: string }, Prisma.CategoryWhereUniqueInput, NoParam>);

/**
 * ユーザー設定を取得する API エンドポイント (ユーザー別)
 * @route GET /api/users/:userId/settings
 * @param {string} userId - 設定を取得するユーザーの ID (URL パラメータ)
 * @returns {Promise<void>} ユーザー設定オブジェクト
 * @throws {Error} 400 - 無効なユーザー ID の場合
 * @throws {Error} 404 - 指定されたユーザーの設定が見つからない場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.get("/api/users/:userId/settings", authenticate, (async (req, res) => {
	try {
		const { userId } = req.params;
		const numericUserId = Number(userId);

		// ユーザーIDが有効な数値かチェック
		if (Number.isNaN(numericUserId)) {
			res.status(400).json({ message: "Invalid User ID" });
			return;
		}

		const userSettings = await prisma.userSettings.findUnique({
			where: { userId: numericUserId },
		});

		if (!userSettings) {
			// 設定が見つからない場合は 404 を返す
			res.status(404).json({ message: "User settings not found" });
			return;
		}

		res.json(userSettings);
	} catch (error: unknown) {
		console.error("Error fetching user settings:", error);
		res.status(500).json({ message: "Failed to fetch user settings" });
	}
}) as RequestHandler<{ userId: string }, UserSettings | { message: string }, NoParam, NoParam>);

/**
 * ユーザー設定を更新する API エンドポイント
 * @route PUT /api/users/:userId/settings
 * @param {string} userId - 設定を更新するユーザーの ID (URL パラメータ)
 * @param {UserSettingsUpdateRequestBody} req.body - 更新する設定データ
 * @returns {Promise<void>}
 * @throws {Error} 400 - 無効な入力データまたは無効なユーザー ID の場合
 * @throws {Error} 404 - 指定されたユーザーの設定が見つからない場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.put("/api/users/:userId/settings", authenticate, (async (req, res) => {
	try {
		const { userId } = req.params;
		const numericUserId = Number(userId);

		// ユーザーIDが有効な数値かチェック
		if (Number.isNaN(numericUserId)) {
			res.status(400).json({ message: "Invalid User ID" });
			return;
		}

		const { dateChangeTime, theme, language, notifications } = req.body;

		// 更新データオブジェクトを構築
		const updateData: {
			dateChangeTime?: string;
			theme?: string;
			language?: string;
			notifications?: boolean;
		} = {};
		if (dateChangeTime !== undefined) updateData.dateChangeTime = String(dateChangeTime);
		if (theme !== undefined) updateData.theme = String(theme);
		if (language !== undefined) updateData.language = String(language);
		if (notifications !== undefined) updateData.notifications = Boolean(notifications);


		// 更新データが空の場合は何もしない
		if (Object.keys(updateData).length === 0) {
			res.status(400).json({ message: "No update data provided" });
			return;
		}

		const updatedSettings = await prisma.userSettings.update({
			where: { userId: numericUserId },
			data: updateData,
		});
		res.json(updatedSettings);
	} catch (error: unknown) {
		console.error("Error updating user settings:", error);
		if (
			error instanceof PrismaClientKnownRequestError &&
			error.code === "P2025"
		) {
			res.status(404).json({ message: "User settings not found" });
		} else {
			res.status(500).json({ message: "Failed to update user settings" });
		}
	}

	return;
}) as RequestHandler<{ userId: string }, UserSettings | { message: string }, UserSettingsUpdateRequestBody, unknown>);

/**
 * 特定の日付の DailyPlan とその DailyPlanItem を取得する API エンドポイント
 * @route GET /api/users/:userId/daily-plans/:date
 * @param {string} userId - DailyPlan を取得するユーザーの ID (URL パラメータ)
 * @param {string} date - 取得する DailyPlan の日付 (YYYY-MM-DD 形式)
 * @returns {Promise<void>} DailyPlan オブジェクト (DailyPlanItem を含む)
 * @throws {Error} 400 - 無効なユーザー ID または日付形式の場合
 * @throws {Error} 404 - 指定された DailyPlan が見つからない場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.get("/api/users/:userId/daily-plans/:date", authenticate, (async (req, res) => {
	try {
		const { userId, date } = req.params;
		const numericUserId = Number(userId);

		// ユーザーIDが有効な数値かチェック
		if (Number.isNaN(numericUserId)) {
			res.status(400).json({ message: "Invalid User ID" });
			return;
		}

		// 日付形式の基本的なチェック (YYYY-MM-DD)
		if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
			res.status(400).json({ message: "Invalid date format. Use YYYY-MM-DD." });
			return;
		}

		// 日付文字列をDateオブジェクトに変換し、日付部分のみを抽出 (UTCとして解釈)
		const targetDate = new Date(date);

		// 変換結果が有効な日付かチェック
		if (Number.isNaN(targetDate.getTime())) {
			res.status(400).json({ message: "Invalid date value." });
			return;
		}

		// Prismaのdate型は日付のみを扱うため、検索条件を調整
		// 指定された日付の00:00:00から翌日の00:00:00未満の範囲で検索
		const startOfDate = new Date(targetDate);
		startOfDate.setUTCHours(0, 0, 0, 0); // UTCの0時0分0秒に設定

		const endOfDate = new Date(targetDate);
		endOfDate.setUTCDate(endOfDate.getUTCDate() + 1); // 翌日に設定
		endOfDate.setUTCHours(0, 0, 0, 0); // UTCの翌日0時0分0秒に設定


		const dailyPlan = await prisma.dailyPlan.findFirst({
			where: {
				userId: numericUserId,
				date: {
					gte: startOfDate,
					lt: endOfDate,
				},
			},
			include: {
				items: {
					orderBy: {
						order: 'asc', // DailyPlanItem を order 順にソート
					},
				},
			},
		});

		if (!dailyPlan) {
			res.status(404).json({ message: "Daily Plan not found for this date." });
			return;
		}

		res.json(dailyPlan);
	} catch (error: unknown) {
		console.error("Error fetching daily plan:", error);
		res.status(500).json({ message: "Failed to fetch daily plan" });
	}
}) as RequestHandler<{ userId: string; date: string }, (DailyPlan & { items: DailyPlanItem[] }) | { message: string }, NoParam, NoParam>);

/**
 * 新しい DailyPlan を作成する API エンドポイント
 * @route POST /api/daily-plans
 * @param {DailyPlanCreateRequestBody} req.body - DailyPlan のデータ (userId, date)
 * @returns {Promise<void>}
 * @throws {Error} 400 - 無効な入力データの場合 (userId, date が必須)
 * @throws {Error} 409 - 指定されたユーザーと日付の DailyPlan が既に存在する場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.post("/api/daily-plans", authenticate, (async (req, res) => {
    try {
        const { userId, date } = req.body;

        // 必須フィールドのバリデーション
        if (userId === undefined || !date) {
            return res.status(400).json({ message: "userId and date are required" });
        }

		const numericUserId = Number(userId);

		// userIdが有効な数値かチェック
        if (Number.isNaN(numericUserId)) {
            res.status(400).json({ message: "Invalid userId" });
            return;
        }

		// 日付形式の基本的なチェック (YYYY-MM-DD)
		if (!/^\d{4}-\d{2}-\d{2}$/.test(date.toLocaleString())) {
			res.status(400).json({ message: "Invalid date format. Use YYYY-MM-DD." });
			return;
		}

		// 日付文字列をDateオブジェクトに変換し、日付部分のみを抽出 (UTCとして解釈)
		const targetDate = new Date(date);

		// 変換結果が有効な日付かチェック
		if (Number.isNaN(targetDate.getTime())) {
			res.status(400).json({ message: "Invalid date value." });
			return;
		}

		// Prismaのdate型は日付のみを扱うため、保存前に日付部分のみを保持するように調整
		const dateOnly = new Date(targetDate);
		dateOnly.setUTCHours(0, 0, 0, 0); // UTCの0時0分0秒に設定

        const newDailyPlan = await prisma.dailyPlan.create({
			data: {
				userId: numericUserId,
				date: dateOnly,
			},
		});
        res.status(201).json(newDailyPlan); // 201 Created を返す

    } catch (error: unknown) {
        console.error("Error creating daily plan:", error);
		if (
			error instanceof PrismaClientKnownRequestError &&
			error.code === "P2002" // Unique constraint failed
		) {
			res.status(409).json({ message: "Daily Plan already exists for this user and date." });
		} else {
        	res.status(500).json({ message: "Failed to create Daily Plan" });
		}
    }

    return;
}) as RequestHandler<NoParam, DailyPlan | { message: string }, DailyPlanCreateRequestBody, NoParam>);

/**
 * DailyPlan に DailyPlanItem を追加する API エンドポイント
 * @route POST /api/daily-plans/:dailyPlanId/items
 * @param {string} dailyPlanId - DailyPlanItem を追加する DailyPlan の ID (URL パラメータ)
 * @param {DailyPlanItemCreateRequestBody} req.body - DailyPlanItem のデータ
 * @returns {Promise<void>}
 * @throws {Error} 400 - 無効な入力データまたは無効な DailyPlan ID の場合
 * @throws {Error} 404 - 指定された DailyPlan が見つからない場合
 * @throws {Error} 409 - 同じ ToDo または Habit が既に DailyPlanItem として存在する場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.post("/api/daily-plans/:dailyPlanId/items", authenticate, (async (req, res) => {
    try {
        const { dailyPlanId } = req.params;
        const numericDailyPlanId = Number(dailyPlanId);

        // DailyPlan IDが有効な数値かチェック
        if (Number.isNaN(numericDailyPlanId)) {
            res.status(400).json({ message: "Invalid Daily Plan ID" });
            return;
        }

        const { todoId, habitId, title, description, time, priority, completed, order } = req.body;

        // 必須フィールドのバリデーション (title, order は必須とする)
        if (!title || order === undefined) {
             return res.status(400).json({ message: "title and order are required" });
        }

		// todoId, habitId, 独自入力のいずれかであるかのバリデーション
		const hasTodoId = todoId !== undefined && todoId !== null;
		const hasHabitId = habitId !== undefined && habitId !== null; // タイプミス修正
		const isStandalone = !hasTodoId && !hasHabitId;

		if ((hasTodoId && hasHabitId) || (!hasTodoId && !hasHabitId && !isStandalone)) {
			// todoId と habitId が両方存在、または両方存在しない (かつ独自入力でない) は無効
			res.status(400).json({ message: "Either todoId or habitId must be provided, or it must be a standalone item." });
			return;
		}

		// todoId または habitId が指定されている場合、数値であることを確認
		if (hasTodoId && Number.isNaN(Number(todoId))) {
			res.status(400).json({ message: "Invalid todoId value." });
			return;
		}
		if (hasHabitId && Number.isNaN(Number(habitId))) {
			res.status(400).json({ message: "Invalid habitId value." });
			return;
		}

		// order が有効な数値かチェック
		const numericOrder = Number(order);
		if (Number.isNaN(numericOrder)) { // Biome 警告対応
			res.status(400).json({ message: "Invalid order value." });
			return;
		}

		// time が指定されている場合、有効な日付形式かチェック
		// time が指定されている場合、有効な日付形式かチェックし、Dateオブジェクトまたはnullを設定
		let itemTime: Date | null = null;
		if (time !== undefined) { // time が undefined でない場合のみ処理
			if (time === null) {
				itemTime = null; // null の場合はそのまま null を設定
			} else {
				const parsedTime = new Date(time);
				if (Number.isNaN(parsedTime.getTime())) { // Biome 警告対応
					res.status(400).json({ message: "Invalid time format." });
					return;
				}
				itemTime = parsedTime; // 有効な日付の場合は Date オブジェクトを設定
			}
		}


		// priority が指定されている場合、有効な数値かチェック
		let numericPriority: number | null = null;
		if (priority !== undefined && priority !== null) {
			numericPriority = Number(priority);
			if (Number.isNaN(numericPriority)) { // Biome 警告対応
				res.status(400).json({ message: "Invalid priority value." });
				return;
			}
		}


        // Build data object conditionally
        const createData: Prisma.DailyPlanItemCreateInput = {
            dailyPlan: { connect: { id: numericDailyPlanId } }, // Connect to DailyPlan
            title: String(title),
            order: numericOrder,
            completed: completed !== undefined ? Boolean(completed) : false, // Default to false if undefined

            // Conditionally add optional fields
            ...(description !== undefined && { description: description ? String(description) : null }),
            ...(time !== undefined && { time: itemTime }), // itemTime is already Date | null
            ...(priority !== undefined && priority !== null && { priority: numericPriority }), // numericPriority is already number | null

            // Conditionally add todo or habit connection
            ...(hasTodoId && { todo: { connect: { id: Number(todoId) } } }),
            ...(hasHabitId && { habit: { connect: { id: Number(habitId) } } }),
        };

        const newDailyPlanItem = await prisma.dailyPlanItem.create({
			data: createData,
		});
        res.status(201).json(newDailyPlanItem); // 201 Created を返す

    } catch (error: unknown) {
        console.error("Error creating daily plan item:", error);
		if (
			error instanceof PrismaClientKnownRequestError &&
			error.code === "P2003" // Foreign key constraint failed (DailyPlanId が存在しないなど)
		) {
			res.status(404).json({ message: "Daily Plan not found." });
		} else if (
			error instanceof PrismaClientKnownRequestError &&
			error.code === "P2002" // Unique constraint failed (同じ DailyPlan に同じ ToDo/Habit を追加しようとした場合)
		) {
			res.status(409).json({ message: "This Todo or Habit is already in the Daily Plan." });
		}
		else {
        	res.status(500).json({ message: "Failed to create Daily Plan Item" });
		}
    }

    return;
}) as RequestHandler<{ dailyPlanId: string }, DailyPlanItem | { message: string }, DailyPlanItemCreateRequestBody, NoParam>);

/**
 * 既存の DailyPlanItem を更新する API エンドポイント
 * @route PUT /api/daily-plan-items/:id
 * @param {string} id - 更新する DailyPlanItem の ID (URL パラメータ)
 * @param {DailyPlanItemUpdateRequestBody} req.body - 更新する DailyPlanItem のデータ
 * @returns {Promise<void>}
 * @throws {Error} 400 - 無効な入力データまたは無効な ID の場合
 * @throws {Error} 404 - 指定された ID の DailyPlanItem が見つからない場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.put("/api/daily-plan-items/:id", authenticate, (async (req, res) => {
	try {
		const { id } = req.params;
		const dailyPlanItemId = Number(id);

		// IDが有効な数値かチェック
		if (Number.isNaN(dailyPlanItemId)) {
			res.status(400).json({ message: "Invalid Daily Plan Item ID" });
			return;
		}

		const { title, description, time, priority, completed, order } = req.body;

		// 更新データオブジェクトを構築
		const updateData: Prisma.DailyPlanItemUpdateInput = {}; // Explicitly define type

		if (title !== undefined) updateData.title = String(title);
		if (description !== undefined) updateData.description = description ? String(description) : null;

		if (time !== undefined) { // time が undefined でない場合のみ処理
			if (time === null) {
				updateData.time = null; // null の場合はそのまま null を設定
			} else {
				const itemTime = new Date(time.toLocaleString());
				if (Number.isNaN(itemTime.getTime())) { // Biome 警告対応
					res.status(400).json({ message: "Invalid time format." });
					return;
				}
				updateData.time = itemTime; // 有効な日付の場合は Date オブジェクトを設定
			}
		}

		if (priority !== undefined) {
			if (priority === null) {
				updateData.priority = null;
			} else {
				const numericPriority = Number(priority);
				if (Number.isNaN(numericPriority)) { // Biome 警告対応
					res.status(400).json({ message: "Invalid priority value." });
					return;
				}
				updateData.priority = numericPriority;
			}
		}

		if (completed !== undefined) updateData.completed = Boolean(completed);

		if (order !== undefined) {
			const numericOrder = Number(order);
			if (Number.isNaN(numericOrder)) { // Biome 警告対応
				res.status(400).json({ message: "Invalid order value." });
				return;
			}
			updateData.order = numericOrder;
		}


		// 更新データが空の場合は何もしない
		if (Object.keys(updateData).length === 0) {
			res.status(400).json({ message: "No update data provided" });
			return;
		}

		const updatedDailyPlanItem = await prisma.dailyPlanItem.update({
			where: { id: dailyPlanItemId },
			data: updateData as Prisma.DailyPlanItemUpdateInput, // Explicitly cast updateData
		});
		res.json(updatedDailyPlanItem);
	} catch (error: unknown) {
		console.error("Error updating daily plan item:", error);
		if (
			error instanceof PrismaClientKnownRequestError &&
			error.code === "P2025"
		) {
			res.status(404).json({ message: "Daily Plan Item not found" });
		} else {
			res.status(500).json({ message: "Failed to update Daily Plan Item" });
		}
	}

	return;
}) as RequestHandler<{ id: string }, DailyPlanItem | { message: string }, DailyPlanItemUpdateRequestBody, unknown>);

/**
 * 既存の DailyPlanItem を削除する API エンドポイント
 * @route DELETE /api/daily-plan-items/:id
 * @param {string} id - 削除する DailyPlanItem の ID (URL パラメータ)
 * @returns {Promise<object>} 成功メッセージ
 * @throws {Error} 400 - 無効な ID の場合
 * @throws {Error} 404 - 指定された ID の DailyPlanItem が見つからない場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.delete("/api/daily-plan-items/:id", authenticate, (async (req: Request<{ id: string }>, res: Response) => {
	try {
		const { id } = req.params;
		const dailyPlanItemId = Number(id);

		// IDが有効な数値かチェック
		if (Number.isNaN(dailyPlanItemId)) {
			res.status(400).json({ message: "Invalid Daily Plan Item ID" });
			return;
		}

		await prisma.dailyPlanItem.delete({
			where: { id: dailyPlanItemId },
		});
		res.json({ message: "Daily Plan Item deleted successfully" });
	} catch (error: unknown) {
		console.error("Error deleting daily plan item:", error);
		if (
			error instanceof PrismaClientKnownRequestError &&
			error.code === "P2025"
		) {
			res.status(404).json({ message: "Daily Plan Item not found" });
		} else {
			res.status(500).json({ message: "Failed to delete Daily Plan Item" });
		}
	}
}) as RequestHandler<{ id: string }, { message: string }, Prisma.DailyPlanItemWhereUniqueInput, NoParam>);

/**
 * 特定の ToDo のサブタスクを取得する API エンドポイント
 * @route GET /api/todos/:todoId/subtasks
 * @param {string} todoId - サブタスクを取得する親 ToDo の ID (URL パラメータ)
 * @returns {Promise<void>} サブタスク (ToDo アイテム) の配列
 * @throws {Error} 400 - 無効な ToDo ID の場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.get("/api/todos/:todoId/subtasks", authenticate, (async (req, res) => {
	try {
		const { todoId } = req.params;
		const numericTodoId = Number(todoId);

		// ToDo IDが有効な数値かチェック
		if (Number.isNaN(numericTodoId)) {
			res.status(400).json({ message: "Invalid Todo ID" });
			return;
		}

		const subtasks = await prisma.todo.findMany({
			where: { parentId: numericTodoId },
			orderBy: {
				createdAt: 'asc', // サブタスクは作成順に並べる
			},
		});
		res.json(subtasks);
	} catch (error: unknown) {
		console.error("Error fetching subtasks:", error);
		res.status(500).json({ message: "Failed to fetch subtasks" });
	}
}) as RequestHandler<{ todoId: string }, Todo[] | { message: string }, NoParam, NoParam>);

/**
 * 特定の ToDo に新しいサブタスクを作成する API エンドポイント
 * @route POST /api/todos/:todoId/subtasks
 * @param {string} todoId - サブタスクを追加する親 ToDo の ID (URL パラメータ)
 * @param {TodoCreateRequestBody} req.body - サブタスクのデータ (title, description, priority, categoryId, completed, userId)
 * @returns {Promise<void>}
 * @throws {Error} 400 - 無効な入力データまたは無効な ToDo ID の場合
 * @throws {Error} 404 - 指定された親 ToDo が見つからない場合 (PrismaエラーコードP2003)
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.post("/api/todos/:todoId/subtasks", authenticate, (async (req, res) => {
    try {
        const { todoId } = req.params;
        const numericTodoId = Number(todoId);

        // ToDo IDが有効な数値かチェック
        if (Number.isNaN(numericTodoId)) {
            res.status(400).json({ message: "Invalid Todo ID" });
            return;
        }

        const { title, description, priority, categoryId, completed, userId } = req.body;

        // 必須フィールドのバリデーション (title, userId は必須)
        if (!title || userId === undefined) {
            return res.status(400).json({ message: "title and userId are required" });
        }

        // 型変換とデフォルト値の設定
        const data = {
            title: String(title),
            description: description ? String(description) : null,
            priority: priority !== undefined ? Number(priority) : null,
            categoryId: categoryId !== undefined ? Number(categoryId) : null,
            completed: completed !== undefined ? Boolean(completed) : false,
            userId: Number(userId),
            parentId: numericTodoId, // 親ToDoのIDを設定
        };

        // userIdが有効な数値かチェック
        if (Number.isNaN(data.userId)) {
            res.status(400).json({ message: "Invalid userId" });
            return;
        }
        // categoryIdが有効な数値かチェック (存在する場合)
        if (data.categoryId !== null && Number.isNaN(data.categoryId)) {
            res.status(400).json({ message: "Invalid categoryId" });
            return;
        }
        // priorityが有効な数値かチェック (存在する場合)
        if (data.priority !== null && Number.isNaN(data.priority)) {
            res.status(400).json({ message: "Invalid priority" });
            return;
        }

        const newSubtask = await prisma.todo.create({ data });
        res.status(201).json(newSubtask); // 201 Created を返す

    } catch (error: unknown) {
        console.error("Error creating subtask:", error);
        if (
            error instanceof PrismaClientKnownRequestError &&
            error.code === "P2003" // Foreign key constraint failed (parentId が存在しないなど)
        ) {
            res.status(404).json({ message: "Parent Todo not found." });
        } else {
            res.status(500).json({ message: "Failed to create Subtask" });
        }
    }

    return;
}) as RequestHandler<{ todoId: string }, Todo | { message: string }, TodoCreateRequestBody, NoParam>);

/**
 * 既存のサブタスクを更新する API エンドポイント
 * @route PUT /api/subtasks/:subtaskId
 * @param {string} subtaskId - 更新するサブタスクの ID (URL パラメータ)
 * @param {TodoUpdateRequestBody} req.body - 更新するサブタスクのデータ (title, description, priority, categoryId, completed)
 * @returns {Promise<void>}
 * @throws {Error} 400 - 無効な入力データまたは無効なサブタスク ID の場合
 * @throws {Error} 404 - 指定された ID のサブタスクが見つからない場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.put("/api/subtasks/:subtaskId", authenticate, (async (req, res) => {
	try {
		const { subtaskId } = req.params;
		const numericSubtaskId = Number(subtaskId);

		// サブタスク IDが有効な数値かチェック
		if (Number.isNaN(numericSubtaskId)) {
			res.status(400).json({ message: "Invalid Subtask ID" });
			return;
		}

		const { title, description, priority, categoryId, completed } = req.body;

		// 更新データオブジェクトを構築
		const updateData: {
			title?: string;
			description?: string | null;
			priority?: number | null;
			categoryId?: number | null;
			completed?: boolean;
		} = {};
		if (title !== undefined) updateData.title = String(title);
		if (description !== undefined)
			updateData.description = description ? String(description) : null;
		if (priority !== undefined) {
			const numPriority = Number(priority);
			if (Number.isNaN(numPriority)) {
				res.status(400).json({ message: "Invalid priority value" });
				return;
			}
			updateData.priority = numPriority;
		}
		if (categoryId !== undefined) {
			const numCategoryId = Number(categoryId);
			if (Number.isNaN(numCategoryId)) {
				res.status(400).json({ message: "Invalid categoryId value" });
				return;
			}
			updateData.categoryId = numCategoryId;
		}
		if (completed !== undefined) updateData.completed = Boolean(completed);

		// 更新データが空の場合は何もしない
		if (Object.keys(updateData).length === 0) {
			res.status(400).json({ message: "No update data provided" });
			return;
		}

		const updatedSubtask = await prisma.todo.update({
			where: { id: numericSubtaskId, parentId: { not: null } }, // parentId が null でない (つまりサブタスクである) ことを確認
			data: updateData,
		});

        if (!updatedSubtask) {
            res.status(404).json({ message: "Subtask not found or is not a subtask." });
            return;
        }

		res.json(updatedSubtask);
	} catch (error: unknown) {
		console.error("Error updating subtask:", error);
		if (
			error instanceof PrismaClientKnownRequestError &&
			error.code === "P2025"
		) {
			res.status(404).json({ message: "Subtask not found" });
		} else {
			res.status(500).json({ message: "Failed to update Subtask" });
		}
	}

	return;
}) as RequestHandler<{ subtaskId: string }, Todo | { message: string }, TodoUpdateRequestBody, unknown>);

/**
 * 既存のサブタスクを削除する API エンドポイント
 * @route DELETE /api/subtasks/:subtaskId
 * @param {string} subtaskId - 削除するサブタスクの ID (URL パラメータ)
 * @returns {Promise<object>} 成功メッセージ
 * @throws {Error} 400 - 無効なサブタスク ID の場合
 * @throws {Error} 404 - 指定された ID のサブタスクが見つからない場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.delete("/api/subtasks/:subtaskId", authenticate, (async (req, res) => {
	try {
		const { subtaskId } = req.params;
		const numericSubtaskId = Number(subtaskId);

		// サブタスク IDが有効な数値かチェック
		if (Number.isNaN(numericSubtaskId)) {
			res.status(400).json({ message: "Invalid Subtask ID" });
			return;
		}

        // parentId が null でない (つまりサブタスクである) ことを確認して削除
		const deletedSubtask = await prisma.todo.delete({
			where: { id: numericSubtaskId, parentId: { not: null } },
		});

        if (!deletedSubtask) {
            res.status(404).json({ message: "Subtask not found or is not a subtask." });
            return;
        }

		res.json({ message: "Subtask deleted successfully" });
	} catch (error: unknown) {
		console.error("Error deleting subtask:", error);
		if (
			error instanceof PrismaClientKnownRequestError &&
			error.code === "P2025"
		) {
			res.status(404).json({ message: "Subtask not found" });
		} else {
			res.status(500).json({ message: "Failed to delete Subtask" });
		}
	}
}) as RequestHandler<{ subtaskId: string }, { message: string }, Prisma.TodoWhereUniqueInput, NoParam>);


/**
 * ユーザー登録 API エンドポイント
 * @route POST /api/signup
 * @param {object} req.body - ユーザー登録データ (email, password)
 * @returns {Promise<void>}
 * @throws {Error} 400 - 無効な入力データの場合
 * @throws {Error} 409 - メールアドレスが既に登録されている場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.post("/api/signup", (async (req, res) => {
    try {
        const { email, password } = req.body;

        // 入力データのバリデーション
        if (!email || !password) {
            res.status(400).json({ message: "Email and password are required" });
			return;
        }

        // auth.ts の signupUser 関数を呼び出し
        const user = await signupUser(String(email), String(password));

        // 成功時はユーザー情報 (パスワードは含まない) を返す
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...userInfo } = user;
        res.status(201).json(userInfo);

    } catch (error: unknown) {
        console.error("Error in signup endpoint:", error);
        if (
            error instanceof PrismaClientKnownRequestError &&
            error.code === "P2002" // Unique constraint failed (メールアドレス重複)
        ) {
            res.status(409).json({ message: "Email already exists" });
        } else {
            res.status(500).json({ message: "Failed to sign up" });
        }
    }
}) as RequestHandler<NoParam, { id: number; email: string; appleId: string | null; googleId: string | null; createdAt: Date; updatedAt: Date } | { message: string }, { email?: string; password?: string }, NoParam>);

/**
 * ユーザーログイン API エンドポイント
 * @route POST /api/login
 * @param {object} req.body - ログインデータ (email, password)
 * @returns {Promise<void>}
 * @throws {Error} 400 - 無効な入力データの場合
 * @throws {Error} 401 - 認証失敗の場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.post("/api/login", (async (req, res, next) => { // next を追加
    try {
        const { email, password } = req.body;

        // 入力データのバリデーション
        if (!email || !password) {
            res.status(400).json({ message: "Email and password are required" });
			return;
        }

        // auth.ts の loginUser 関数を呼び出し
        const user = await loginUser(String(email), String(password));

        // 認証失敗の場合
        if (!user) {
            res.status(401).json({ message: "Invalid email or password" });
            return;
        }

        // 認証成功時、セッションにユーザーIDを保存
        req.session.userId = user.id;

        // 成功メッセージまたはユーザー情報 (パスワードは含まない) を返す
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...userInfo } = user;
        res.json(userInfo);

    } catch (error: unknown) {
        console.error("Error in login endpoint:", error);
        // エラーを next() に渡す
        next(error);
    }
}) as RequestHandler<NoParam, { id: number; email: string; appleId: string | null; googleId: string | null; createdAt: Date; updatedAt: Date } | { message: string; error?: string }, { email?: string; password?: string }, NoParam>);

/**
 * ユーザーログアウト API エンドポイント
 * @route POST /api/logout
 * @returns {Promise<void>}
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.post("/api/logout", (async (req, res) => {
    try {
        // セッションを破棄
        req.session.destroy((err) => {
            if (err) {
                console.error("Error destroying session:", err);
                res.status(500).json({ message: "Failed to log out" });
                return;
            }
            // クライアント側のCookieをクリアするために、Cookieを削除するレスポンスヘッダーを設定することも検討
            res.clearCookie('connect.sid'); // express-sessionのデフォルトのCookie名
            res.json({ message: "Logged out successfully" });
        });
    } catch (error: unknown) {
        console.error("Error in logout endpoint:", error);
        res.status(500).json({ message: "Failed to log out" });
    }
}) as RequestHandler<NoParam, { message: string }, NoParam, NoParam>);

/**
 * 認証状態チェック API エンドポイント
 * @route GET /api/check-auth
 * @returns {Promise<void>} 認証状態とユーザー情報 (認証済みの場合)
 * @throws {Error} 401 - 未認証の場合
 * @throws {Error} 500 - サーバーエラーの場合
 */
app.get("/api/check-auth", (async (req, res) => {
    try {
        // セッションにユーザーIDが存在するか確認
        if (req.session?.userId) {
            // ユーザーIDを使ってユーザー情報を取得 (パスワードは取得しない)
            const user = await prisma.user.findUnique({
                where: { id: req.session.userId },
                select: {
                    id: true,
                    email: true,
                    appleId: true,
                    googleId: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });

            if (user) {
                // 認証済みの場合、ユーザー情報を返す
                res.json({ isAuthenticated: true, user });
            } else {
                // セッションはあるがユーザーが見つからない場合 (DBから削除されたなど)
                req.session.destroy(() => { /* ignore error */ }); // セッションをクリア
                res.status(401).json({ isAuthenticated: false, message: "User not found" });
            }
        } else {
            // 未認証の場合
            res.status(401).json({ isAuthenticated: false, message: "Not authenticated" });
        }
    } catch (error: unknown) {
        console.error("Error in check-auth endpoint:", error);
        res.status(500).json({ message: "Failed to check authentication status" });
    }
}) as RequestHandler<NoParam, { isAuthenticated: boolean; user?: { id: number; email: string; appleId: string | null; googleId: string | null; createdAt: Date; updatedAt: Date } } | { message: string }, NoParam, NoParam>);


/**
 * 静的ファイル (HTML, CSS, JavaScript) を提供するための設定
 */
app.use(express.static(join(__dirname, "../../client/dist"))); // クライアント側の index.html などがあるディレクトリを指定

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// エラーハンドリングミドルウェア
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => { // 型を修正
    console.error("Unhandled error:", err); // サーバーログにエラーを出力

    // クライアントにJSON形式でエラーレスポンスを返す
    res.status(500).json({
        message: "An unexpected error occurred",
        error: err instanceof Error ? err.message : String(err),
    });
});
