import React from "react";
import PropTypes from "prop-types";

import "./left-navigation.style.scss";

const LeftNavigation = ({ children }) => {
    return <nav>{children}</nav>;
};

LeftNavigation.propTypes = {
    children: PropTypes.node.isRequired,
};
export default LeftNavigation;
