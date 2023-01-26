import React from "react";
import HeaderStyles from "./Header.module.css";
import { useDispatch } from "react-redux";
import { SET_MODAL_VISIBLE } from "../../services/actions/App";

const Header = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch({
      type: SET_MODAL_VISIBLE,
      payload: true,
    });
  };

  return (
    <header className={HeaderStyles.header}>
      <h1 className={HeaderStyles.header__title}>Fire Gram</h1>
      <div className={HeaderStyles.header__title_container}>
        <h2 className={HeaderStyles.header__subtitle}>Твои фотографии</h2>
        <p className={HeaderStyles.header__text}>
          Нет никого, кто возлюбил бы, предпочел и возжаждал бы само страдание только за то, что это
          страдание
        </p>
        <button className={HeaderStyles.header__button} onClick={openModal}></button>
      </div>
    </header>
  );
};

export default Header;
