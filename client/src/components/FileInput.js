import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
//utils
import { getFileName } from "./utils/str";

const UploadButton = ({
  type,
  fileSize,
  error,
  onFileChange,
  onError,
  uploaded,
  accept = ".csv",
}) => {
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const inputRef = useRef(null);

  const handleUpload = () => {
    inputRef.current?.click();
  };
  const handleDisplayFileDetails = () => {
    if (fileSize && inputRef.current.files[0].size > 2 * 1024 * 1024) {
      onError(true);
    } else {
      onError(false);
      onFileChange(inputRef.current?.files[0]);
    }
    inputRef.current?.files &&
      setUploadedFileName(getFileName(inputRef.current.files[0].name));
  };
  return (
    <>
      <div className="m-3">
        <label className="mx-3">Choose file {type ? `(${type})` : ""}:</label>
        <input
          ref={inputRef}
          onChange={handleDisplayFileDetails}
          className="d-none"
          type="file"
          accept={accept}
        />
        <button
          onClick={handleUpload}
          className={`btn btn-outline-${
            uploadedFileName ? "success" : "primary"
          }`}
        >
          {!uploaded && uploadedFileName ? uploadedFileName : "Upload"}
        </button>
        {error && (
          <p className="m-3 invalid-feedback d-block font-weight-bold">
            File size must be less than 2mb
          </p>
        )}
      </div>
    </>
  );
};
UploadButton.propTypes = {
  type: PropTypes.string.isRequired,
  fileSize: PropTypes.number.isRequired,
  error: PropTypes.bool.isRequired,
  onFileChange: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  uploaded: PropTypes.any,
  accept: PropTypes.string,
};
export default UploadButton;
