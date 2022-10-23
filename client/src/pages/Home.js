import React, { useState } from "react";
import { Row, Col, Container, Button, Modal } from "react-bootstrap";

// custom components
import withLayout from "../components/hoc/withLayout";

// css
import "../assets/css/Home.css";
import SearchInput from "../components/SearchInput";
import CustomTable from "../components/CustomTable";
import CustomPagination from "../components/CustomPagination";
import FileUploadMoal from "../components/Modals/FileUploadModal";

const Home = () => {
  const [showBlukUploadModal, setShowBulkUploadModal] = useState(false);

  const handleClose = () => setShowBulkUploadModal(false);
  const handleShow = () => setShowBulkUploadModal(true);
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
                  <Button
                    variant="outline-primary"
                    onClick={() => handleShow()}
                  >
                    Bulk Upload
                  </Button>
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
          <FileUploadMoal
            showBlukUploadModal={showBlukUploadModal}
            handleClose={handleClose}
          />
        </Row>
      </Container>
    </div>
  );
};

export default withLayout(Home);
