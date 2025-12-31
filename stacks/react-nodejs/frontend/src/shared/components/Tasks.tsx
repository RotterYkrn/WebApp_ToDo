import React, { createContext, ReactNode, useContext, useState } from "react";
import { DefaultValues, FieldValues, FormProvider, useForm, useFormContext } from "react-hook-form";

export const Tasks = ({ children }: { children: React.ReactNode }) => {
    return (
        <>{children}</>
    );
}

Tasks.List = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="task-list">{children}</div>
    );
}

interface TaskItemContextType<T extends FieldValues = any> {
    isOpen: boolean;
    handleTitleClick: () => void;
    isEditing: boolean;
    toggleEdit: (value: boolean) => void;
    task?: T;
    onSubmit: (data: T) => Promise<void>;
    handleDelete?: () => Promise<void>;
}

const TaskItemContext = createContext<TaskItemContextType | undefined>(undefined);

const useTaskItemContext = <T extends FieldValues>() => {
    const context = useContext(TaskItemContext);
    if (!context) {
        throw new Error("Tasks.Itemの子コンポーネントとして使用してください");
    }
    return context as TaskItemContextType<T>;
};

type TasksCreateProps<T extends FieldValues> = React.PropsWithChildren<{
    onCreate: (data: T) => Promise<void>;
}>;

Tasks.Create = <T extends FieldValues>({ children, onCreate }: TasksCreateProps<T>) => {
    const [isOpen, setIsOpen] = useState(false);
    const methods = useForm<T>();

    const onSubmit = async (data: T) => {
        await onCreate(data);
        setIsOpen(false);
        methods.reset();
    };

    return (
        <TaskItemContext value={{
            isOpen,
            handleTitleClick: () => setIsOpen(!isOpen),
            isEditing: true,
            toggleEdit: () => setIsOpen(false),
            onSubmit,
        }}>
            <FormProvider {...methods}>
                <article className="task">
                    {children}
                </article>
            </FormProvider>
        </TaskItemContext>
    );
}

type TasksItemProps<T extends FieldValues> = React.PropsWithChildren<{
    id: number;
    task: T;
    onSave: (id: number, updatedTask: T) => Promise<void>;
    onDelete: (id: number) => Promise<void>;
}>;

Tasks.Item = <T extends FieldValues>({ id, task, onSave, onDelete, children }: TasksItemProps<T>) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const methods = useForm<T>({
        defaultValues: task as DefaultValues<T>,
    });

    const handleTitleClick = () => {
        setIsOpen(!isOpen);
    };

    const toggleEdit = (value: boolean) => {
        setIsEditing(value);
    }

    const onSubmit = async (data: T) => {
        await onSave(id, data);
        setIsEditing(false);
    };

    const handleDelete = async () => {
        await onDelete(id);
    };

    return (
        <TaskItemContext value={{
            isOpen,
            handleTitleClick,
            isEditing,
            toggleEdit,
            onSubmit,
            handleDelete,
        }}>
            <FormProvider {...methods}>
                <article className="task">
                    {children}
                </article>
            </FormProvider>
        </TaskItemContext>
    );
}

// 編集モードではない時に表示するもの
Tasks.View = ({ children }: { children: ReactNode }) => {
    const { isEditing } = useTaskItemContext();

    return !isEditing
        ? <>{children}</>
        : null;
};

// 編集モードの時に表示するもの
Tasks.Form = ({ children }: { children: ReactNode }) => {
    const { handleSubmit } = useFormContext();
    const { isEditing, onSubmit } = useTaskItemContext();

    if (!isEditing) return null;

    return (
        <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
            {children}
        </form>
    );
};

// 編集モードをONにするボタン
Tasks.EditButton = ({ children }: { children: ReactNode }) => {
    const { toggleEdit } = useTaskItemContext();

    return (
        <button onClick={() => toggleEdit(true)}>
            {children}
        </button>
    );
};

Tasks.DeleteButton = ({ children }: { children: React.ReactNode; }) => {
    const { handleDelete } = useTaskItemContext();

    if (!handleDelete) return null;

    return (
        <button className="task-delete-button" onClick={handleDelete}>
            {children}
        </button>
    );
};

Tasks.Title = ({ children }: React.ComponentPropsWithoutRef<"button">) => {
    const { isOpen, handleTitleClick } = useTaskItemContext();

    return (
        <button
            type="button"
            className="task-title"
            onClick={handleTitleClick}
            aria-expanded={isOpen}
        >
            {children}
        </button>
    );
}

Tasks.Detail = ({ children }: React.ComponentPropsWithoutRef<"div">) => {
    const { isOpen } = useTaskItemContext();

    return (
        <>
            {isOpen && (
                <div className="task-detail">
                    {children}
                </div>
            )}
        </>
    );
}

Tasks.Description = ({ children }: React.ComponentPropsWithoutRef<"p">) => {
    return (
        <p className="task-description">
            {children}
        </p>
    );
}

Tasks.TitleInput = (props: React.ComponentPropsWithoutRef<"input">) => {
    const { register } = useFormContext();

    return (
        <label>
            タイトル:
            <input
                {...props}
                {...register("title", { required: "タイトルは必須です" })}
                className={`task-title-input ${props.className || ""}`}
            />
        </label>
    );
}

Tasks.DescriptionInput = (props: React.ComponentPropsWithoutRef<"input">) => {
    const { register } = useFormContext();

    return (
        <label>
            説明:
            <input
                {...props}
                {...register("description")}
                className={`task-description-input ${props.className || ""}`}
            />
        </label>
    );
}

Tasks.SaveButton = ({ children }: { children: React.ReactNode; }) => {
    return (
        <button type="submit" className="task-save-button">
            {children}
        </button>
    );
}

Tasks.CancelButton = ({ children }: { children: React.ReactNode; }) => {
    const { toggleEdit } = useTaskItemContext();
    const { reset } = useFormContext();

    return (
        <button
            type="button"
            className="task-cancel-button"
            onClick={() => {
                toggleEdit(false);
                reset();
            }}
        >
            {children}
        </button>
    );
}

export default Tasks;
