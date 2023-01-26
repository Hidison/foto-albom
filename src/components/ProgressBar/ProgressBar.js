import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import ProgressBarStyles from "./ProgressBar.module.css";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { SET_IS_FILE_LOADING, closeModal } from "../../services/actions/App";
import { SET_FILE, SET_IS_UPLOAD_FILE } from "../../services/actions/AddCardModal";

const ProgressBar = () => {
  const dispatch = useDispatch();
  const { file } = useSelector((state) => state.addCardModal);

  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      dispatch({
        type: SET_FILE,
        payload: null,
      });
      dispatch({
        type: SET_IS_UPLOAD_FILE,
        payload: false,
      });
      dispatch(closeModal());
      dispatch({
        type: SET_IS_FILE_LOADING,
        payload: false,
      });
    } else {
      dispatch({
        type: SET_IS_FILE_LOADING,
        payload: true,
      });
    }
  }, [dispatch, url]);

  return (
    <div className={ProgressBarStyles.progressLineContainer}>
      <div className={ProgressBarStyles.progressLine} style={{ width: progress + "%" }}>
        <span
          className={
            progress > 8
              ? ProgressBarStyles.percent
              : `${ProgressBarStyles.percent} ${ProgressBarStyles.percent_begin}`
          }
        >
          <Loader />
          {Math.floor(progress)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
