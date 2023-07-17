import React from "react";
import RootModal from "./RootModal";

export const Modal = ({ children, backdropClick }) => {
    return (
        <RootModal>
            <div className="modal-container" onClick={backdropClick}>
                {children}
            </div>
        </RootModal>
    );
};
