import React from "react";
import { Form } from "react-bootstrap";

import "../assets/css/SearchInput.css";

const SearchInput = ({
  heading,
  subHeading,
  placeHolder = "",
  containerClassName = "",
  onChange = () => {},
  value = undefined,
}) => {
  return (
    <div className="search-input">
      <div className="d-flex flex-row align-items-center">
        <div
          className={`d-flex flex-column heading-container-sm ${containerClassName}`}
        >
          <p className="heading-text">{heading}</p>
          <p className="sub-heading-text">{subHeading}</p>
        </div>
        <span className="doller-icon"> $ </span>
        <div className="input-container">
          <Form.Control
            type="number"
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
