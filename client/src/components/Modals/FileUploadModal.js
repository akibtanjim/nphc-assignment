import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Spinner } from "react-bootstrap";

//services
import { bulkUploadEmployee } from "../../services/employee";

// components
import FileInput from "../FileInput";

const FileUploadMoal = ({
  showBlukUploadModal,
  handleClose,
  setReloadTable,
}) => {
  const [selectedFile, setSelectedFile] = useState(undefined);
  const [error, setError] = useState(false);
  const [suceessMessage, setSuccessMessage] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [uploading, setSetUploading] = useState(undefined);
  const [uploaded, setSetUploded] = useState(undefined);

  const onSaveClick = () => {
    setSetUploading(true);
    let formData = new FormData();
    formData.append("file", selectedFile);
    bulkUploadEmployee(formData)
      .then((response) => {
        setSetUploded(true);
        setSelectedFile(undefined);
        setError(false);
        setSetUploading(false);
        setSuccessMessage(response?.data?.message);
        setErrorMessage(undefined);
        setTimeout(() => {
          setSuccessMessage(undefined);
          handleClose();
          setReloadTable(true);
        }, 2000);
      })
      .catch((e) => {
        setReloadTable(false);
        setSetUploded(false);
        setSetUploading(false);
        setSuccessMessage(undefined);
        setErrorMessage("Unable to upload file. Please try again later");
      });
  };
  return (
    <Modal centered show={showBlukUploadModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Bulk Upload Employee (CSV File)</Modal.Title>
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

        <FileInput
          type="CSV"
          fileSize={2 * 1024 * 1024}
          onFileChange={setSelectedFile}
          error={error}
          onError={setError}
          uploaded={uploaded}
        />
        <></>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} disabled={uploading}>
          Close
        </Button>
        <Button
          variant="primary"
          disabled={!selectedFile || error || uploading}
          onClick={onSaveClick}
        >
          {uploading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </>
          ) : (
            `Upload`
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
FileUploadMoal.propTypes = {
  showBlukUploadModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  setReloadTable: PropTypes.func.isRequired,
};
export default FileUploadMoal;
