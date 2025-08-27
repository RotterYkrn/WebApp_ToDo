import { AppError } from "@/errors";
import { IAppManager } from "@/shared/app";
import { ApiService } from "@/shared/http";
import { TaskSchemaMap, TaskType } from "@app/shared";
import { Chunk, Effect, pipe } from "effect";
import { TaskService } from "../services/TaskService";

export class TaskComponent {
    constructor(
        private appManager: IAppManager<TaskService | ApiService>
    ) { }

    public readonly buildTaskSection = <T extends TaskType>(
        taskType: T,
        tasks: TaskSchemaMap[T]["ChunkType"]
    ): Effect.Effect<HTMLElement> => {
        const self = this;
        return Effect.gen(function* () {
            const taskSection = document.createElement("section");
            taskSection.id = taskType;

            const title = yield* self.buildSectionTitle(taskType);
            const taskGroup = yield* self.buildTaskGroup(taskType, tasks);
            taskSection.append(
                title,
                taskGroup
            );

            return taskSection;
        });
    }

    private readonly buildSectionTitle = (taskType: TaskType): Effect.Effect<HTMLHeadingElement> => {
        const title = document.createElement("h2");
        switch (taskType) {
            case TaskType.DAILY_PLAN:
                title.textContent = "今日の予定";
                break;
            case TaskType.TODO:
                title.textContent = "TODO リスト";
                break;
            case TaskType.HABIT:
                title.textContent = "習慣リスト";
        }
        return Effect.succeed(title);
    };

    private readonly buildTaskGroup = <T extends TaskType>(
        taskType: T,
        tasks: TaskSchemaMap[T]["ChunkType"]
    ): Effect.Effect<HTMLDivElement> => {
        const self = this;
        return Effect.gen(function* () {
            const taskListGroup = document.createElement("div");
            taskListGroup.id = "task-list";

            const taskList = yield* self.buildTaskList(tasks);
            const addTaskForm = yield* self.buildAddTaskForm(taskType);
            taskListGroup.append(
                ...taskList,
                addTaskForm
            );

            return taskListGroup;
        });
    }

    private readonly buildTaskList = (tasks: TaskSchemaMap[TaskType]["ChunkType"]): Effect.Effect<Chunk.Chunk<HTMLElement>> =>
        Effect.succeed(Chunk.map(tasks, task => {
            const taskElem = document.createElement("article");
            taskElem.className = "task";

            const titleElem = document.createElement("button");
            titleElem.className = "task-title";
            titleElem.textContent = task.title;

            titleElem.setAttribute("aria-expanded", "false");
            titleElem.addEventListener("click", () => {
                const isOpen = taskElem.classList.toggle("open");
                titleElem.setAttribute("aria-expanded", isOpen.toString());
            });

            const detailElem = document.createElement("p");
            detailElem.className = "task-detail";
            detailElem.textContent = task.detail;

            taskElem.appendChild(titleElem);
            taskElem.appendChild(detailElem);
            return taskElem;
        }));

    private readonly buildAddTaskForm = (taskType: TaskType): Effect.Effect<HTMLElement> => {
        const taskElem = document.createElement("article");
        taskElem.className = "task"; // 既存のタスクと同じクラス名

        const titleElem = document.createElement("button");
        titleElem.className = "task-title";
        titleElem.setAttribute("aria-expanded", "false");
        titleElem.textContent = "⊕ 新しいタスクを追加"; // タイトル部分に「新しいタスクを追加」

        const detailElem = document.createElement("p");
        detailElem.className = "task-detail"; // 既存のタスクと同じクラス名
        detailElem.innerHTML = `
        <div><input type="text" id="new-task-title" placeholder="タスクのタイトル" required /></div>
        <div><textarea id="new-task-detail" placeholder="タスクの詳細"></textarea></div>
        <div><button id="add-task-submit-button">タスクを追加</button></div>
    `;

        const formContent = detailElem; // フォームのコンテンツはdetailElemにまとめる
        formContent.style.display = "none"; // 最初は非表示

        titleElem.addEventListener("click", () => {
            const isOpen = taskElem.classList.toggle("open");
            titleElem.setAttribute("aria-expanded", isOpen.toString());
            formContent.style.display = formContent.style.display === "none" ? "block" : "none";
        });

        taskElem.appendChild(titleElem);
        taskElem.appendChild(detailElem);

        const addTaskButton = detailElem.querySelector<HTMLButtonElement>("#add-task-submit-button");
        const newTaskTitleInput = detailElem.querySelector<HTMLInputElement>("#new-task-title");
        const newTaskDetailTextarea = detailElem.querySelector<HTMLTextAreaElement>("#new-task-detail");

        if (addTaskButton && newTaskTitleInput && newTaskDetailTextarea) {
            addTaskButton.addEventListener("click", () => {
                const title = newTaskTitleInput.value;
                const detail = newTaskDetailTextarea.value;

                if (title) {
                    this.appManager.runPromise(
                        pipe(
                            Effect.gen(function* () {
                                const taskService = yield* TaskService;
                                return yield* taskService.createTaskApi(taskType, { title, detail });
                            }),
                            Effect.mapError((e): AppError => e as AppError)
                        )
                    ).then(
                        () => {
                            console.log("タスクが正常に追加されました。");
                            newTaskTitleInput.value = "";
                            newTaskDetailTextarea.value = "";
                            // タスクリストを再読み込み
                            const taskListElement = document.getElementById("task-list");
                            if (taskListElement) {
                                taskListElement.innerHTML = ""; // 既存のリストをクリア
                                // Effect.runPromise(
                                //     pipe(
                                //         buildTaskGroup(taskType),
                                //         Effect.provide(AppLive),
                                //         Effect.mapError((e): AppError => e as AppError)
                                //     )
                                // ).then(
                                //     (taskList: unknown) => {
                                //         taskListElement.append(...(taskList as HTMLElement[]));
                                //     }
                                // ).catch(
                                //     (e: AppError) => {
                                //         console.error("タスクリストの再読み込みに失敗しました:", e);
                                //     }
                                // );
                            }
                        }
                    ).catch(
                        (e: AppError) => {
                            console.error("タスクの追加に失敗しました:", e);
                            alert("タスクの追加に失敗しました。");
                        }
                    );
                } else {
                    alert("タスクのタイトルは必須です。");
                }
            });
        }

        return Effect.succeed(taskElem);
    };
};
