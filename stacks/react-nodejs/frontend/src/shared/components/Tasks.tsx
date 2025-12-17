import { createContext, useContext, useState } from "react";

export const Tasks = ({ children }: { children: React.ReactNode }) => {
    return (
        <>{children}</>
    );
}

Tasks.List = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="task-list">{children}</div>
    )
}

const TaskItemContext = createContext<{
    isOpen: boolean;
    handleTitleClick: () => void;
}>({
    isOpen: false,
    handleTitleClick: () => {},
});

Tasks.Item = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleTitleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <TaskItemContext value={{ isOpen, handleTitleClick }}>
            <article className="task">
                {children}
            </article>
        </TaskItemContext>
    )
}

Tasks.Title = ({ children }: { children: React.ReactNode }) => {
    const { isOpen, handleTitleClick } = useContext(TaskItemContext);

    return (
        <button
            className="task-title"
            onClick={handleTitleClick}
            aria-expanded={isOpen}
        >
            {children}
        </button>
    )
}

Tasks.Detail = ({ children }: { children: React.ReactNode }) => {
    const { isOpen } = useContext(TaskItemContext);

    return (
        <>
            {isOpen && (
                <div className="task-detail">
                    {children}
                </div>
            )}
        </>
    )
}

Tasks.Description = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="task-description">
            {children}
        </p>
    )
}

export default Tasks;
