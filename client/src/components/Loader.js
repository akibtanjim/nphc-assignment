import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ animation = "border", size = undefined, className = "" }) => {
  return (
    <div className="d-flex align-items-center justify-content-center h-screen">
      <Spinner animation={animation} size={size} className={className} />
    </div>
  );
};

export default Loader;
