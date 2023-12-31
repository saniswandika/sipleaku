import * as React from "react";

function FileIcon(props) {
    return (
        <svg
            width={50}
            height={50}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            {...props}
        >
            <path
                d="M15 13.5h-.75v-.75a.75.75 0 10-1.5 0v.75H12a.75.75 0 100 1.5h.75v.75a.75.75 0 101.5 0V15H15a.75.75 0 100-1.5zM9.75 15H4.5a.75.75 0 01-.75-.75V3.75A.75.75 0 014.5 3h3.75v2.25A2.25 2.25 0 0010.5 7.5h2.25v2.25a.75.75 0 101.5 0v-3-.045a.982.982 0 00-.045-.202v-.068a.804.804 0 00-.143-.21l-4.5-4.5a.802.802 0 00-.21-.143.218.218 0 00-.075 0 .825.825 0 00-.232-.082H4.5a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 16.5h5.25a.75.75 0 100-1.5zm0-10.942L11.693 6H10.5a.75.75 0 01-.75-.75V4.058zM6 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H6zm3.75 6H6a.75.75 0 100 1.5h3.75a.75.75 0 100-1.5zm.75-3H6a.75.75 0 000 1.5h4.5a.75.75 0 100-1.5z"
                fill="#14B8A6"
            />
            <path
                d="M15 13.5h-.75v-.75a.75.75 0 10-1.5 0v.75H12a.75.75 0 100 1.5h.75v.75a.75.75 0 101.5 0V15H15a.75.75 0 100-1.5z"
                fill="#14B8A6"
            />
        </svg>
    );
}

export default FileIcon;
