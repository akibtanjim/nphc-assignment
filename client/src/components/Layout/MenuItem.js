import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuItem = ({ functionNo }) => {
  return (
    <p className="mt-2">
      <FontAwesomeIcon icon="image" />{" "}
      <span className="menu-name">Function {functionNo}</span>
    </p>
  );
};

export default MenuItem;
