import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "react-bootstrap";

const Loader = ({ animation = "border", size = undefined, className = "" }) => {
  return (
    <div className="d-flex align-items-center justify-content-center h-screen">
      <Spinner animation={animation} size={size} className={className} />
    </div>
  );
};
Loader.propTypes = {
  animation: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default Loader;
