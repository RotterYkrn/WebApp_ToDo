import { Todo, TodoInput } from "@1day-todo/shared";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

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

interface TaskItemContextType {
    isOpen: boolean;
    handleTitleClick: React.MouseEventHandler<HTMLButtonElement>;
    isEditing: boolean;
    toggleEdit: (value: boolean) => void;
    onSubmit: 
        | ((data: { title?: string; description?: string | null }) => void)
        | ((data: { title: string; description?: string | null }) => void);
    handleDelete?: () => void;
}

const TaskItemContext = createContext<TaskItemContextType | undefined>(undefined);

const useTaskItemContext = () => {
    const context = useContext(TaskItemContext);
    if (!context) {
        throw new Error("Tasks.Itemの子コンポーネントとして使用してください");
    }
    return context;
};

type TasksCreateProps = React.PropsWithChildren<{
    onCreate: (task: { title: string; description?: string | null }) => void;
}>;

Tasks.Create = ({ children, onCreate }: TasksCreateProps) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const methods = useForm<TodoInput>();

    const handleTitleClick = () => {
        setIsOpen(!isOpen);
    };

    const onSubmit = async (data: { title: string; description?: string | null }) => {
        await onCreate(data);
        setIsOpen(false);
    };

    return (
        <TaskItemContext value={{
            isOpen,
            handleTitleClick,
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

type TasksItemProps = React.PropsWithChildren<{
    id: number;
    task: Todo;
    onSave: (
        id: number,
        updatedTask: {
            title?: string;
            description?: string | null;
        }
    ) => void;
    onDelete: (id: number) => void;
}>;

Tasks.Item = ({ id, task, onSave, onDelete, children }: TasksItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const methods = useForm<TodoInput>({
        defaultValues: task,
    });

    const handleTitleClick = () => {
        setIsOpen(!isOpen);
    };

    const toggleEdit = (value: boolean) => {
        setIsEditing(value);
    }

    const onSubmit = async (data: { title?: string; description?: string | null }) => {
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
    const { handleSubmit } = useFormContext<Todo>();
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
    const { handleDelete = () => {} } = useTaskItemContext();

    return (
        <button className="task-delete-button" onClick={() => handleDelete()}>
            {children}
        </button>
    );
};

Tasks.Title = ({ children }: { children: React.ReactNode }) => {
    const { isOpen, handleTitleClick } = useTaskItemContext();

    return (
        <button
            className="task-title"
            onClick={handleTitleClick}
            aria-expanded={isOpen}
        >
            {children}
        </button>
    );
}

Tasks.Detail = ({ children }: { children: React.ReactNode }) => {
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

Tasks.Description = ({ children }: { children: React.ReactNode; }) => {
    return (
        <p className="task-description">
            {children}
        </p>
    );
}

Tasks.TitleInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    const { register } = useFormContext<Todo>();

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

Tasks.DescriptionInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    const { register } = useFormContext<Todo>();

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
    const { reset } = useFormContext<Todo>();

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
