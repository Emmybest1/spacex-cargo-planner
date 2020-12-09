import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { fetchShipmentsRequest } from "../../../redux/root.actions";
import Button from "../../../components/button/button.component";
import useUnsafeDispatch from "../../../hooks/useUnsafeDispatch";
import "./empty-local-storage-information.style.scss";

const EmptyLocalStorageInformationModal = () => {
    const modalRef = useRef(null);
    const [shouldCloseModal, setShouldCloseModal] = useState(false);
    const dispatch = useDispatch();
    const safeDispatch = useUnsafeDispatch(dispatch);

    const closeModal = () => {
        setShouldCloseModal(true);
    };

    const loadShipments = () => {
        safeDispatch(fetchShipmentsRequest());
        closeModal();
    };

    return (
        <>
            {!shouldCloseModal && (
                <div className="container modal" ref={modalRef}>
                    <span className="cancel-btn" onClick={closeModal}></span>

                    <h3>Load Shipments</h3>

                    <div className="btns-wrapper">
                        <Button onClick={closeModal}>Cancel</Button>
                        <Button onClick={loadShipments}>Load</Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default EmptyLocalStorageInformationModal;
