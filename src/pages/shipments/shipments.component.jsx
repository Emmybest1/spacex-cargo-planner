import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchShipmentRequest } from "../../redux/root.actions";
import Header from "../../structures/header/header.component";
import Main from "../../structures/main/main.component";
import EmptyLocalStorageInformationModal from "./modals/empty-local-storage-information.modal";
import LeftNavigation from "../../components/left-navigation/left-navigation.component";
import ShipmentCard from "../../components/shipment-card/shipment-card.component";
import CompaniesList from "../../components/companies-list/companies-list.component";
import useUnsafeDispatch from "../../hooks/useUnsafeDispatch";
import "./shipments.style.scss";

const Shipments = () => {
    const [shouldDisplayModal, setShouldDisplayModal] = React.useState(false);
    const shipmentsSelector = useSelector((state) => state.shipments.shipments);
    const [shipments, setShipments] = React.useState(() => JSON.parse(localStorage.getItem("shippments")) ?? []);
    const shipment = useSelector((state) => state.shipment.shipment);
    const dispatch = useDispatch();
    const safeDispatch = useUnsafeDispatch(dispatch);
    const { companyId } = useParams();

    React.useEffect(() => {
        if (JSON.parse(localStorage.getItem("shippments")) === null) {
            setShouldDisplayModal(true);
            setShipments(shipmentsSelector);
        }
    }, [shipments, shipmentsSelector]);

    React.useEffect(() => {
        if (companyId) {
            safeDispatch(fetchShipmentRequest(companyId));
        }
    }, [companyId, safeDispatch]);

    const searchShipments = (values) => {
        if (values) {
            setShipments((shipments) => shipments.filter((shipment) => shipment.name.includes(values) ?? shipment));
        } else {
            setShipments(() => JSON.parse(localStorage.getItem("shippments")) ?? shipmentsSelector);
        }
    };

    return (
        <>
            {shouldDisplayModal && <EmptyLocalStorageInformationModal />}
            <div className="shipments-container">
                <Header searchShipments={searchShipments} />
                <Main className="shipments-container__main">
                    <div className="container left-navigation-wrapper">
                        <LeftNavigation>
                            <CompaniesList shipments={shipments} />
                        </LeftNavigation>
                    </div>

                    <div className="container main-content-wrapper">{companyId ? <ShipmentCard shipments={shipment} /> : <ShipmentCard shipments={shipments} />}</div>
                </Main>
            </div>
        </>
    );
};

export default Shipments;
