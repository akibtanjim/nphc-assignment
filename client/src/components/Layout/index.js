import React from "react";

import { Row, Col } from "react-bootstrap";
import LeftPanel from "./LeftPanel";

const Layout = ({ children }) => {
  return (
    <Row>
      <Col md={2} className="hidden-xs h-screen left-panel">
        <LeftPanel />
      </Col>
      <div className="col-md-10 col-sm-12">{children}</div>
    </Row>
  );
};

export default Layout;
