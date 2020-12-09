import React from "react";
import PropTypes from "prop-types";

import { _cargoBays } from "../../utils/cargo-bays";
import "./shipment-card.style.scss";

const ShipmentCard = ({ shipments }) => {
    return (
        <>
            {shipments.map((shipment) => (
                <ul key={shipment.id.toString()} className="shipment-card">
                    <li>
                        <h2>{shipment.name}</h2>
                    </li>
                    <li>
                        <a href={`mailto:${shipment.email}`}>{shipment.email}</a>
                    </li>
                    <li>
                        <section>
                            <h6>Number of required cargo bays</h6>
                            <p>{_cargoBays(shipment.boxes)}</p>
                        </section>
                    </li>
                    <li>
                        <section>
                            <h6>Cargo boxes</h6>
                            <p className="cargo-boxes">{shipment.boxes}</p>
                        </section>
                    </li>
                </ul>
            ))}
        </>
    );
};

ShipmentCard.propTypes = {
    shipments: PropTypes.array.isRequired,
};
export default ShipmentCard;
