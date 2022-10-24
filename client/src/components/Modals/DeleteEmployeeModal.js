import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

import { deleteEmployee } from "../../services/employee";

const DeleteEmployeeModal = ({
  showDeleteModal,
  handleDeleteModalClose,
  selectedEmployee = {},
  setReloadTable = () => {},
}) => {
  const [employeeId, setEmployeeId] = useState(undefined);
  const [suceessMessage, setSuccessMessage] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [uploading, setSetUploading] = useState(undefined);
  const [uploaded, setUploaded] = useState(undefined);

  useEffect(() => {
    if (Object.keys(selectedEmployee).length) {
      setEmployeeId(selectedEmployee?.id);
    }
  }, [selectedEmployee]);

  const onDeleteClick = () => {
    setSetUploading(true);
    deleteEmployee(employeeId)
      .then((response) => {
        setSetUploading(false);
        setUploaded(true);
        setSuccessMessage(
          response?.data?.message || "Employe Deleted Successfully !"
        );
        setErrorMessage(undefined);
        setTimeout(() => {
          setSuccessMessage(undefined);
          handleDeleteModalClose();
          setReloadTable(true);
        }, 2000);
      })
      .catch((e) => {
        setUploaded(false);
        setSetUploading(false);
        setErrorMessage("Unable to delte employee information!");
        setSuccessMessage(undefined);
      });
  };

  return (
    <Modal centered show={showDeleteModal} onHide={handleDeleteModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Employee</Modal.Title>
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
        {!uploaded && <p>Do you really want to delete this record ?</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleDeleteModalClose}
          disabled={uploading}
        >
          Close
        </Button>
        <Button
          variant="primary"
          disabled={uploading || uploaded}
          onClick={onDeleteClick}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
DeleteEmployeeModal.propTypes = {
  showDeleteModal: PropTypes.bool.isRequired,
  handleDeleteModalClose: PropTypes.func.isRequired,
  selectedEmployee: PropTypes.any.isRequired,
  setReloadTable: PropTypes.func.isRequired,
};
export default DeleteEmployeeModal;
