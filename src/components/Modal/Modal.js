import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ModalStyles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../services/actions/App";
const modalRoot = document.getElementById("modals");

const Modal = ({ modalVisible, ...props }) => {
  const dispatch = useDispatch();

  const { isFileLoading } = useSelector((state) => state.app);

  useEffect(() => {
    function closeByEscape(e) {
      const { key } = e;
      if (key === "Escape" && !isFileLoading) {
        dispatch(closeModal());
      }
    }
    if (modalVisible) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalVisible, isFileLoading]);

  const stopCloseOnModal = (e) => {
    e.stopPropagation();
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return ReactDOM.createPortal(
    <ModalOverlay modalVisible={modalVisible}>
      <div className={ModalStyles.modal} onClick={stopCloseOnModal}>
        {props.children}
        <button
          className={ModalStyles.modalCloseButton}
          disabled={isFileLoading && true}
          onClick={handleCloseModal}
        ></button>
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
