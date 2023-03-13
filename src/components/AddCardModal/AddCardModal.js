import React, { useRef, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import AddCardModalStyles from "./AddCardModal.module.css";
import AddCardByLink from "../AddCardByLink/AddCardByLink";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../services/actions/App";
import { setFileUploadError, setIsUploadFile } from "../../services/AddCardModal";

const AddCardModal = () => {
  const dispatch = useDispatch();
  const { fileUploadError, isUploadFile } = useSelector((state) => state.addCardModal);
  const { auth } = useSelector((state) => state.auth);
  const [file, setFile] = useState(null);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const inputRef = useRef(null);

  const fileTypes = ["image/png", "image/jpeg"];

  const changeFileHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      dispatch(setFileUploadError(""));
    } else {
      setFile(null);
      dispatch(setFileUploadError('Можно загружать файлы только в формате "png" и "jpeg"'));
    }
  };

  const uploadFile = (e) => {
    e.preventDefault();
    dispatch(setIsUploadFile(true));
    inputRef.current.value = "";
  };

  const unSelectFile = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    setFile(null);
  };

  return (
    <>
      {auth ? (
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
            {file && isUploadFile && <ProgressBar file={file} setFile={setFile} />}
          </form>
          <p className={AddCardModalStyles.text}>Или</p>
          <AddCardByLink />
        </>
      ) : (
        <div className={AddCardModalStyles.attention__container}>
          <span>Чтобы добавлять картинки необходимо авторизоваться!</span>
          <div className={AddCardModalStyles.attention__auth_container}>
            <Link
              to="/login"
              onClick={handleCloseModal}
              className={AddCardModalStyles.attention__link_text}
            >
              Авторизоваться
            </Link>
            или
            <Link
              to="/register"
              onClick={handleCloseModal}
              className={AddCardModalStyles.attention__link_text}
            >
              Зарегистрироваться
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCardModal;
