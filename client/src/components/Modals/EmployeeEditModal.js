import { useEffect, useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

// css
import "../../assets/css/EditModal.css";

const EmployeeEditModal = ({
  showEditModal,
  handleEditModalClose,
  selectedEmployee = {},
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

  return (
    <Modal centered show={showEditModal} onHide={handleEditModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          onClick={handleEditModalClose}
          disabled={uploading}
        >
          Close
        </Button>
        <Button
          variant="primary"
          disabled={
            !fullNameError || !userNameError || !salaryError || uploading
          }
        >
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmployeeEditModal;
