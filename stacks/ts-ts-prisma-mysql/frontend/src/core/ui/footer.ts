const createFooter = (): HTMLElement => {
    const footer = document.createElement('footer');

    const nav = document.createElement('p');
    const currentPath = location.pathname;
    const links = [
        { path: '/', label: '今日の予定' },
        { path: '/todo', label: 'ToDo リスト' },
        { path: '/habit', label: '習慣リスト' },
        { path: '/settings', label: '設定' },
    ];

    nav.innerHTML = links
        .map(link =>
            link.path === currentPath
                ? link.label
                : `<a href="${link.path}">${link.label}</a>`
        )
        .join(' | ');

    const copy = document.createElement('p');
    copy.innerHTML = '&copy; 2025 1Day ToDo';

    footer.append(nav, copy);

    return footer;
};

export default createFooter;