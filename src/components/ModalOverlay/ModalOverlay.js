import React from "react";
import ModalOverlayStyles from "./ModalOverlay.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../services/actions/App";

const ModalOverlay = ({ modalVisible, children }) => {
  const dispatch = useDispatch();

  const { isFileLoading } = useSelector((state) => state.app);

  const ModalOverlay = [ModalOverlayStyles.ModalOverlay];

  if (modalVisible) {
    ModalOverlay.push(ModalOverlayStyles.active);
  }

  const handleCloseModal = () => {
    if (!isFileLoading) {
      dispatch(closeModal());
    }
  };

  return (
    <div className={ModalOverlay.join(" ")} onClick={handleCloseModal}>
      {children}
    </div>
  );
};

export default ModalOverlay;
