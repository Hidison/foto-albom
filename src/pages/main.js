import React from "react";
import MainPageStyles from "./main.module.css";
import useFirestore from "../hooks/useFirestore";
import TablePhotos from "../components/TablePhotos/TablePhotos";
import Modal from "../components/Modal/Modal";
import AddCardModal from "../components/AddCardModal/AddCardModal";
import FullSizeImg from "../components/FullSizeImg/FullSizeImg";
import { useDispatch, useSelector } from "react-redux";
import { SET_MODAL_VISIBLE } from "../services/actions/App";

const MainPage = () => {
  const dispatch = useDispatch();

  const { modalVisible, modalImgVisible } = useSelector((state) => state.app);

  const openModal = () => {
    dispatch({
      type: SET_MODAL_VISIBLE,
      payload: true,
    });
  };

  const { docs } = useFirestore("images");

  return (
    <>
      <div className={MainPageStyles.header__title_container}>
        <h2 className={MainPageStyles.header__subtitle}>Твои фотографии</h2>
        <p className={MainPageStyles.header__text}>
          Нет никого, кто возлюбил бы, предпочел и возжаждал бы само страдание только за то, что это
          страдание
        </p>
        <button className={MainPageStyles.header__button} onClick={openModal}></button>
      </div>
      <div className={MainPageStyles.table}>
        {docs && docs.map((cards, index) => <TablePhotos cards={cards} key={cards.id} />)}
      </div>
      <Modal modalVisible={modalVisible}>
        <AddCardModal />
      </Modal>
      <Modal modalVisible={modalImgVisible}>
        <FullSizeImg />
      </Modal>
    </>
  );
};

export default MainPage;
