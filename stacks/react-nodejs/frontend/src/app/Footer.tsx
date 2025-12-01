import { PagePath } from "@1day-todo/shared";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const links = [
        { path: PagePath.INDEX, label: "今日の予定" },
        { path: PagePath.TODO, label: "ToDo リスト" },
        { path: PagePath.HABIT, label: "習慣リスト" },
        { path: PagePath.SETTING, label: "設定" },
    ];

    return (
        <footer>
            <p>
                {links.map((link, index) => (
                    <React.Fragment key={link.path}>
                        {link.path === currentPath ? (
                            <span>{link.label}</span>
                        ) : (
                            <Link to={link.path}>{link.label}</Link>
                        )}
                        {index < links.length - 1 && " | "}
                    </React.Fragment>
                ))}
            </p>

            <p>&copy; 2025 1Day ToDo</p>
        </footer>
    );
};

export default Footer;
