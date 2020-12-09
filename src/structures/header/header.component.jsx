import React from "react";
import PropTypes from "prop-types";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "../../components/button/button.component";
import Searchbar from "../../components/searchbar/searchbar.component";
import "./header.style.scss";

const Header = ({ searchShipments }) => {
    const history = useHistory();
    const shipments = useSelector((state) => state.shipments.shipments);

    const loadShippment = () => {
        history.push("/");
    };

    const saveToLocalStorage = () => {
        localStorage.setItem("shippments", JSON.stringify(shipments));
    };

    return (
        <header>
            <h3 className="logo">
                <NavLink to="/" exact className="logo-anchor">
                    Cargo Planner
                </NavLink>
            </h3>
            <Searchbar searchShipments={searchShipments} />
            <div className="btns-wrapper">
                <Button onClick={loadShippment}>Load</Button>
                <Button onClick={saveToLocalStorage}>Save</Button>
            </div>
        </header>
    );
};

Header.propTypes = {
    searchShipments: PropTypes.func.isRequired,
};

export default Header;
