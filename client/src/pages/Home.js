import React, { useEffect, useState, useCallback } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

// custom components
import withLayout from "../components/hoc/withLayout";
import SearchInput from "../components/SearchInput";
import EmployeeTable from "../components/EmployeeTable";
import CustomPagination from "../components/CustomPagination";
import FileUploadMoal from "../components/Modals/FileUploadModal";
import Loader from "../components/Loader";

// Services
import { getEmployees } from "../services/employee";

// css
import "../assets/css/Home.css";
import EmployeeEditModal from "../components/Modals/EmployeeEditModal";

let searchTimeout;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showBlukUploadModal, setShowBulkUploadModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [minSalary, setMinSalary] = useState("");
  const [minSalaryError, setMinSalaryError] = useState(undefined);
  const [maxSalary, setMaxSalary] = useState("");
  const [maxSalaryError, setMaxSalaryError] = useState(undefined);
  const [limit] = useState(10);
  const [reloadTable, setReloadTable] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(false);

  const handleClose = () => setShowBulkUploadModal(false);
  const handleShow = () => setShowBulkUploadModal(true);

  const getEmployeeList = useCallback(
    (page = 1) => {
      getEmployees(page, limit, minSalary, maxSalary)
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
          setReloadTable(false);
          setCurrentPage(parseInt(response?.data?.data?.currentPage));
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        })
        .catch((e) => {
          setEmployees([]);
          setPaginationInfo({});
          setCurrentPage(1);
          setLoading(false);
        });
    },
    [limit, maxSalary, minSalary]
  );

  const searchEmployees = useCallback(() => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      if (!minSalaryError && !maxSalaryError) {
        getEmployeeList(1);
      }
    }, 600);
  }, [getEmployeeList, minSalaryError, maxSalaryError]);

  const onCurrentPageChange = (pageNumber) => {
    if (pageNumber > 0) {
      setCurrentPage(pageNumber);
      getEmployeeList(pageNumber);
    }
  };

  const onMinSalaryChange = (e) => {
    const value = e.target.value;
    setMinSalary(value);
    if (!isNaN(value)) {
      setMinSalaryError(Number(value) > 0 ? false : true);
    } else {
      setMinSalaryError(true);
    }
  };

  const onMaxSalaryChange = (e) => {
    const value = e.target.value;
    setMaxSalary(value);
    if (!isNaN(value)) {
      setMaxSalaryError(Number(value) > 0 ? false : true);
    } else {
      setMaxSalaryError(true);
    }
  };

  useEffect(() => {
    getEmployeeList();
  }, [getEmployeeList]);

  useEffect(() => {
    if (minSalary !== "" || maxSalary !== "") {
      searchEmployees();
    }
  }, [searchEmployees, minSalary, maxSalary]);

  useEffect(() => {
    if (reloadTable) {
      getEmployeeList();
    }
  }, [reloadTable, getEmployeeList]);

  useEffect(() => {
    if (!showEditModal) {
      setSelectedEmployee({});
    }
  }, [showEditModal]);

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
                    onChange={onMinSalaryChange}
                    value={minSalary}
                  />
                </div>
                {minSalaryError && (
                  <p className="invalid-feedback d-block">
                    Please enter a valid number! (Minimum Salary)
                  </p>
                )}
              </Col>
              <Col md={5} className="no-padding-right">
                <div className="d-flex flex-row">
                  <p className="price-spearator hidden-xs">-</p>
                  <SearchInput
                    heading={"Maximum salary"}
                    subHeading={"Enter amount"}
                    containerClassName="max-heading-container"
                    onChange={onMaxSalaryChange}
                    value={maxSalary}
                  />
                </div>
                {maxSalaryError && (
                  <p className="invalid-feedback d-block max-salary-error">
                    Please enter a valid number! (Maximum Salary)
                  </p>
                )}
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
                      data={employees}
                      onEditClick={(employee) => {
                        setSelectedEmployee(employee);
                        setShowEditModal(true);
                      }}
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
            setReloadTable={setReloadTable}
          />
          <EmployeeEditModal
            showEditModal={showEditModal}
            handleEditModalClose={() => setShowEditModal(false)}
            selectedEmployee={selectedEmployee}
          />
        </Row>
      </Container>
    </div>
  );
};

export default withLayout(Home);
