import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button, Spinner } from "react-bootstrap";

// custom components
import withLayout from "../components/hoc/withLayout";
import SearchInput from "../components/SearchInput";
import EmployeeTable from "../components/EmployeeTable";
import CustomPagination from "../components/CustomPagination";
import FileUploadMoal from "../components/Modals/FileUploadModal";

// Services
import { getEmployees } from "../services/employee";

// css
import "../assets/css/Home.css";
import Loader from "../components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showBlukUploadModal, setShowBulkUploadModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const handleClose = () => setShowBulkUploadModal(false);
  const handleShow = () => setShowBulkUploadModal(true);

  useEffect(() => {
    getEmployeeList();
  }, []);
  const getEmployeeList = (page = 1) => {
    getEmployees(page)
      .then((response) => {
        setEmployees(
          response?.data?.data.items.map((item) => ({
            ...item,
            salary: parseFloat(item.salary),
          })) || []
        );
        setPaginationInfo({
          ...response?.data?.data,
          items: undefined,
          currentPage: undefined,
        });
        setCurrentPage(parseInt(response?.data?.data?.currentPage));
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((e) => {
        console.log(e);
        setEmployees([]);
        setPaginationInfo({});
        setCurrentPage(1);
        setLoading(false);
      });
  };

  const onCurrentPageChange = (pageNumber) => {
    if (pageNumber > 0) {
      setCurrentPage(pageNumber);
      getEmployeeList(pageNumber);
    }
  };
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
              {loading && (
                <Col md={12}>
                  <Loader animation="border" />
                </Col>
              )}
              {!loading && employees?.length > 0 && (
                <>
                  <Col md={12}>
                    <EmployeeTable
                      headers={["Id", "Name", "Login", "Salary", "Action"]}
                      data={employees}
                    />
                  </Col>
                  <Col md={12}>
                    <CustomPagination
                      itemsCount={paginationInfo?.totalItems || 0}
                      itemsPerPage={10}
                      currentPage={currentPage}
                      setCurrentPage={(pageNumber) =>
                        onCurrentPageChange(pageNumber)
                      }
                      alwaysShown={false}
                    />
                  </Col>
                </>
              )}
              {employees?.length === 0 && (
                <div
                  className={`d-flex align-items-center justify-content-center h-screen`}
                >
                  <p className="no-item">No Employees Found ! </p>
                </div>
              )}
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
