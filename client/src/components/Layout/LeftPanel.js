import React from "react";
import MenuItem from "./MenuItem";

const LeftPanel = () => {
  return (
    <div className="d-flex flex-column justify-content-between">
      <div className="avater-panel">
        <img src={require("../../assets/images/avatar.png")} alt="avater" />
        <p className="username mt-3">Long user name</p>
      </div>
      <div className="menu-items">
        {Array.from(Array(5), (val, index) => index + 1).map((item, key) => {
          return <MenuItem key={key} functionNo={key + 1} />;
        })}
      </div>
    </div>
  );
};

export default LeftPanel;
