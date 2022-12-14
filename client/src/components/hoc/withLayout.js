import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
//custom components
import LeftPanel from "../Layout/LeftPanel";

const Layout = (Component) => {
  return ({ children }) => {
    return (
      <Row>
        <Col md={2} className="hidden-xs left-panel">
          <LeftPanel />
        </Col>
        <div className="col-md-10 col-sm-12">
          <Component />
        </div>
      </Row>
    );
  };
};
Layout.propTypes = {
  Component: PropTypes.element.isRequired,
};
export default Layout;
