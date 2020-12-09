import React from "react";
import PropTypes from "prop-types";

const CompaniesListContainer = ({ children }) => {
    return <ul>{React.Children.map(children, (child) => child)}</ul>;
};

CompaniesListContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
export default CompaniesListContainer;
