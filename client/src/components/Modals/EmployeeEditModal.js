import { useEffect, useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import PropTypes from "prop-types";

// css
import "../../assets/css/EditModal.css";
import { editEmployee } from "../../services/employee";

const EmployeeEditModal = ({
  showEditModal,
  handleEditModalClose,
  selectedEmployee = {},
  setReloadTable = () => {},
}) => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [salary, setSalary] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [salaryError, setSalaryError] = useState(false);

  const [suceessMessage, setSuccessMessage] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [uploading, setSetUploading] = useState(undefined);

  useEffect(() => {
    if (Object.keys(selectedEmployee).length) {
      setFullName(selectedEmployee?.fullName);
      setUserName(selectedEmployee?.userName);
      setSalary(selectedEmployee?.salary);
      setFullNameError(selectedEmployee?.fullName ? false : true);
      setUserNameError(selectedEmployee?.userName ? false : true);
      setSalaryError(selectedEmployee?.salary ? false : true);
    }
  }, [selectedEmployee]);
  const onFullNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    if (value) {
      setFullNameError(false);
    } else {
      setFullNameError(true);
    }
  };

  const onUserNamehange = (e) => {
    const value = e.target.value;
    setUserName(value);
    if (/^[a-z0-9]+$/i.test(value)) {
      setUserNameError(Number(value) > 0 ? false : true);
    } else {
      setUserNameError(true);
    }
  };

  const onSalaryChange = (e) => {
    const value = e.target.value;
    setSalary(value);
    if (!isNaN(value)) {
      setSalaryError(Number(value) > 0 ? false : true);
    } else {
      setSalaryError(true);
    }
  };

  const onEditClick = () => {
    setSetUploading(true);
    editEmployee(
      {
        salary: salary && salary !== "" ? salary : undefined,
        fullName: fullName && fullName !== "" ? fullName : undefined,
        userName: userName && userName !== "" ? userName : undefined,
      },
      selectedEmployee?.id
    )
      .then((response) => {
        setSetUploading(false);
        setSuccessMessage(
          response?.data?.message || "Employe Info Updated Successfully !"
        );
        setErrorMessage(undefined);
        setTimeout(() => {
          setSuccessMessage(undefined);
          setFullNameError(false);
          setUserNameError(false);
          setSalaryError(false);
          handleEditModalClose();
          setReloadTable(true);
        }, 2000);
      })
      .catch((e) => {
        setSetUploading(false);
        setErrorMessage("Unable to update employee information!");
        setSuccessMessage(undefined);
      });
  };

  return (
    <Modal
      centered
      show={showEditModal}
      onHide={() => {
        setFullNameError(false);
        setUserNameError(false);
        setSalaryError(false);
        handleEditModalClose();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {suceessMessage && (
          <div className="alert alert-success" role="alert">
            {suceessMessage}
          </div>
        )}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <p className="edit-heading">Employee Id {selectedEmployee?.id}</p>
        <div className="edit-container">
          <FloatingLabel label="Name" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Name"
              value={fullName}
              onChange={onFullNameChange}
            />
          </FloatingLabel>
          <FloatingLabel label="Login" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Login"
              value={userName}
              onChange={onUserNamehange}
            />
          </FloatingLabel>
          <FloatingLabel label="Salary" className="mb-3">
            <Form.Control
              type="number"
              placeholder="Salary"
              value={salary}
              onChange={onSalaryChange}
            />
          </FloatingLabel>
        </div>
        {fullNameError && (
          <p className="invalid-feedback d-block error-message">
            Please enter a name! (Name)
          </p>
        )}

        {userNameError && (
          <p className="invalid-feedback d-block error-message">
            Please enter alphabets/number! (Login)
          </p>
        )}

        {salaryError && (
          <p className="invalid-feedback d-block error-message">
            Please enter a valid number! (Salary)
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setFullNameError(false);
            setUserNameError(false);
            setSalaryError(false);
            handleEditModalClose();
          }}
          disabled={uploading}
        >
          Close
        </Button>
        <Button
          variant="primary"
          disabled={fullNameError || userNameError || salaryError || uploading}
          onClick={onEditClick}
        >
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
EmployeeEditModal.propTypes = {
  showEditModal: PropTypes.bool.isRequired,
  handleEditModalClose: PropTypes.func.isRequired,
  selectedEmployee: PropTypes.object.isRequired,
  setReloadTable: PropTypes.func.isRequired,
};
export default EmployeeEditModal;
