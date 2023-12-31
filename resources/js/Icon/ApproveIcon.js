import * as React from "react";

function ApproveIcon(props) {
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
                d="M15 6.705a.982.982 0 00-.045-.202v-.068a.804.804 0 00-.143-.21l-4.5-4.5a.803.803 0 00-.21-.143.24.24 0 00-.067 0 .66.66 0 00-.248-.082H5.25A2.25 2.25 0 003 3.75v10.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0015 14.25v-7.5-.045zm-4.5-2.647L12.442 6H11.25a.75.75 0 01-.75-.75V4.058zm3 10.192a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3.75A.75.75 0 015.25 3H9v2.25a2.25 2.25 0 002.25 2.25h2.25v6.75zm-2.783-5.033L8.25 11.694l-.968-.976a.753.753 0 00-1.065 1.066l1.5 1.5a.75.75 0 001.065 0l3-3a.753.753 0 00-1.065-1.066z"
                fill="#12497C"
            />
            <path
                d="M8.25 11.693l2.467-2.475a.753.753 0 111.065 1.065l-3 3a.75.75 0 01-1.065 0l-1.5-1.5a.753.753 0 111.065-1.066l.968.976z"
                fill="#12497C"
            />
        </svg>
    );
}

export default ApproveIcon;
