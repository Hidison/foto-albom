import React, { useRef } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import AddCardModalStyles from "./AddCardModal.module.css";
import AddCardByLink from "../AddCardByLink/AddCardByLink";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_FILE,
  SET_FILE_UPLOAD_ERROR,
  SET_IS_UPLOAD_FILE,
} from "../../services/actions/AddCardModal";

const AddCardModal = () => {
  const dispatch = useDispatch();
  const { file, fileUploadError, isUploadFile } = useSelector((state) => state.addCardModal);

  const inputRef = useRef(null);

  const fileTypes = ["image/png", "image/jpeg"];

  const changeFileHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      dispatch({
        type: SET_FILE,
        payload: selectedFile,
      });
      dispatch({
        type: SET_FILE_UPLOAD_ERROR,
        payload: "",
      });
    } else {
      dispatch({
        type: SET_FILE,
        payload: null,
      });
      dispatch({
        type: SET_FILE_UPLOAD_ERROR,
        payload: 'Можно загружать файлы только в формате "png" и "jpeg"',
      });
    }
  };

  const uploadFile = (e) => {
    e.preventDefault();
    dispatch({
      type: SET_IS_UPLOAD_FILE,
      payload: true,
    });
    inputRef.current.value = "";
  };

  const unSelectFile = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    dispatch({
      type: SET_FILE,
      payload: null,
    });
  };

  return (
    <>
      <form className={AddCardModalStyles.form}>
        <label className={AddCardModalStyles.inputArea}>
          <input
            className={AddCardModalStyles.input}
            type="file"
            onChange={changeFileHandler}
            ref={inputRef}
          />
          {file && (
            <>
              <p className={AddCardModalStyles.formText}>{file.name}</p>
              <button
                onClick={unSelectFile}
                className={AddCardModalStyles.unSelectFileButton}
              ></button>
            </>
          )}
          {fileUploadError && (
            <p className={`${AddCardModalStyles.formText} ${AddCardModalStyles.errorText}`}>
              {fileUploadError}
            </p>
          )}
        </label>
        <button
          disabled={fileUploadError || !file ? true : false}
          className={
            fileUploadError || !file
              ? `${AddCardModalStyles.uploadFileButton} ${AddCardModalStyles.uploadFileButton_disabled}`
              : AddCardModalStyles.uploadFileButton
          }
          onClick={uploadFile}
        >
          Загрузить
        </button>
        {file && isUploadFile && <ProgressBar />}
      </form>
      <p className={AddCardModalStyles.text}>Или</p>
      <AddCardByLink />
    </>
  );
};

export default AddCardModal;
