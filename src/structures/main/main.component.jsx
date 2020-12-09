import React from "react";
import PropTypes from "prop-types";

import "./main.style.scss";

const Main = ({ children, className }) => {
    return (
        <main id="main" className={className && `${className}`}>
            {children}
        </main>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default Main;
