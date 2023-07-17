import React from "react";
import Spinner from "./Spinner";

export default function Button({
    type = "submit",
    processing,
    title,
    className,
    onClick,
    style,
}) {
    return (
        <div className="text-center mt-6">
            <button
                style={style}
                disabled={processing}
                className={`relative flex items-center justify-center h-12 bg-primary-600 active:bg-primary-800
             text-white text-base tracking-widest
             font-bold uppercase px-6 rounded shadow w-full
             hover:shadow-lg outline-none focus:outline-none my-3 
             ease-linear transition-all duration-150 normal-case ${
                 processing && "opacity-75"
             } ${className}`}
                type={type}
                onClick={onClick}
            >
                {processing ? <Spinner width={18} height={18} /> : title}
            </button>
        </div>
    );
}
