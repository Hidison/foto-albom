import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import ProgressBarStyles from "./ProgressBar.module.css";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import { closeModal } from "../../services/actions/App";
import { setIsFileLoading } from "../../services/App";
import { setIsUploadFile } from "../../services/AddCardModal";

const ProgressBar = ({ file, setFile }) => {
  const dispatch = useDispatch();

  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
      dispatch(setIsUploadFile(false));
      dispatch(closeModal());
      dispatch(setIsFileLoading(false));
    } else {
      dispatch(setIsFileLoading(true));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <Loader width={8} height={8} fullPage={false} />
          {Math.floor(progress)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
