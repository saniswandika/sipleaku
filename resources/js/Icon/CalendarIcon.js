import * as React from "react";

function CalendarIcon(props) {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.75 3.75A.75.75 0 003 4.5V15c0 .414.336.75.75.75h10.5A.75.75 0 0015 15V4.5a.75.75 0 00-.75-.75H3.75zM1.5 4.5a2.25 2.25 0 012.25-2.25h10.5A2.25 2.25 0 0116.5 4.5V15a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 15V4.5z"
                fill="#EB2929"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 .75a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3A.75.75 0 0112 .75zM6 .75a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3A.75.75 0 016 .75zM1.5 7.5a.75.75 0 01.75-.75h13.5a.75.75 0 110 1.5H2.25a.75.75 0 01-.75-.75z"
                fill="#EB2929"
            />
            <path
                d="M16.043 13.148a3.287 3.287 0 11-6.574 0 3.287 3.287 0 016.574 0z"
                fill="#EB2929"
            />
            <path
                d="M13.128 14.033h-.503l-.055-2.473h.616l-.058 2.473zm-.575.755c0-.091.03-.167.09-.226a.323.323 0 01.242-.091c.103 0 .184.03.243.091.06.06.09.135.09.226a.305.305 0 01-.087.222c-.058.06-.14.089-.246.089-.106 0-.188-.03-.245-.09a.305.305 0 01-.087-.22z"
                fill="#fff"
            />
        </svg>
    );
}

export default CalendarIcon;
