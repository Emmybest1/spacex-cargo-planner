import React from "react";
import PropTypes from "prop-types";
import CompaniesListContainer from "./companies-list-container";
import { Link } from "react-router-dom";

import "./companies-list.style.scss";

const CompaniesList = ({ shipments }) => {
    return (
        <CompaniesListContainer>
            {shipments.map((shipment) => (
                <li key={shipment.id.toString()}>
                    <Link to={`/${shipment.id}`} className="company-name-achor">
                        {shipment.name}
                    </Link>
                </li>
            ))}
        </CompaniesListContainer>
    );
};

CompaniesList.propTypes = {
    shipments: PropTypes.array.isRequired,
};
export default CompaniesList;
