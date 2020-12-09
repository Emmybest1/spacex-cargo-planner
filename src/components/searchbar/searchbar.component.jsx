import React from "react";
import PropTypes from "prop-types";

import { useUniqueIds } from "../../hooks/useuniqueids";
import Input from "../input/input.component";
import "./searchbar.style.scss";

const Searchbar = ({ searchShipments }) => {
    const [searchedContent, setSearchedContent] = React.useState("");
    const [searchInputId] = useUniqueIds(1);

    const onChangeHandler = (e) => {
        setSearchedContent(e.target.value);
        searchShipments(e.target.value);
    };

    return (
        <form>
            <Input type="search" id={searchInputId} placeholder="Search" value={searchedContent} aria-label="Filter shipments by company name" onChange={onChangeHandler} />
        </form>
    );
};

Searchbar.propTypes = {
    searchShipments: PropTypes.func.isRequired,
};
export default Searchbar;
