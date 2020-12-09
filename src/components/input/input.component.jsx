import React from "react";
import PropTypes from "prop-types";

import "./input.style.scss";

const Input = ({ type, id, labelText, ...otherProps }) => {
    return (
        <>
            {type === "textarea" ? (
                <>
                    {labelText && <label htmlFor={id}>{labelText}</label>}
                    <textarea id={id} cols="30" rows="10" {...otherProps}></textarea>
                </>
            ) : (
                <>
                    {labelText && <label htmlFor={id}>{labelText}</label>}
                    <input type={type} id={id} {...otherProps} />
                </>
            )}
        </>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    labelText: PropTypes.string,
};

Input.defaultProps = {
    type: "text",
};
export default Input;
