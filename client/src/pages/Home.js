import React from "react";
import { Row, Col, Container, Button, Table } from "react-bootstrap";

// custom components
import withLayout from "../components/hoc/withLayout";

// css
import "../assets/css/Home.css";
import SearchInput from "../components/SearchInput";
import CustomTable from "../components/CustomTable";
import CustomPagination from "../components/CustomPagination";

const Home = () => {
  return (
    <div className="home-container">
      <Container>
        <Row>
          <Col md={12}>
            <Row>
              <Col md={5} className="no-padding-right">
                <div className="d-flex flex-row">
                  <img
                    src={require("../assets/images/search.png")}
                    alt="search"
                    width={60}
                    height={60}
                  />
                  <SearchInput
                    heading={"Minimum salary"}
                    subHeading={"Enter amount"}
                  />
                </div>
              </Col>
              <Col md={5} className="no-padding-right">
                <div className="d-flex flex-row">
                  <p className="price-spearator hidden-xs">-</p>
                  <SearchInput
                    heading={"Maximum salary"}
                    subHeading={"Enter amount"}
                    containerClassName="max-heading-container"
                  />
                </div>
              </Col>
              <Col md={2} className="no-padding-right">
                <div className="d-flex flex-row align-items-center h-100 button-container">
                  <Button variant="outline-primary">Bulk Upload</Button>
                </div>
              </Col>
              <Col md={12}>
                <h4 className="mt-4 mb-4 ml-1">Employees</h4>
              </Col>
              <Col md={12}>
                <CustomTable />
              </Col>
              <Col md={12}>
                <CustomPagination />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withLayout(Home);
