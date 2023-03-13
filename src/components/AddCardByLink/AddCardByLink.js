import React, { useEffect } from "react";
import AddCardByLinkStyles from "./AddCardByLink.module.css";
import { closeModal } from "../../services/actions/App";
import { useDispatch, useSelector } from "react-redux";
import { addImageToBase } from "../../services/actions/AddCardModal";
import { addCardByLinkError, addCardByLinkValue } from "../../services/AddCardByLink";

const AddCardByLink = () => {
  const dispatch = useDispatch();

  const { value, error } = useSelector((state) => state.addCardByLink);
  const { user } = useSelector((state) => state.user);

  const isImageLink = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png)/;

  useEffect(() => {
    if (!isImageLink.test(value) && value.length !== 0) {
      dispatch(addCardByLinkError("Введите ссылку на фотографию в формате .jpeg или .png"));
    } else dispatch(addCardByLinkError(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const changeValue = (e) => {
    dispatch(addCardByLinkValue(e.target.value));
  };

  const addFoto = (e) => {
    e.preventDefault();
    dispatch(addImageToBase(value, user.id, user.email));
    dispatch(closeModal());
    dispatch(addCardByLinkValue(""));
  };

  return (
    <form className={AddCardByLinkStyles.form}>
      <input
        className={AddCardByLinkStyles.input}
        type="text"
        value={value}
        onChange={changeValue}
        placeholder={"Вставьте cсылку на картинку"}
      />
      {error && <span className={AddCardByLinkStyles.error}>{error}</span>}
      <button
        disabled={error.length !== 0 || value.length === 0 ? true : false}
        onClick={addFoto}
        className={
          error.length !== 0 || value.length === 0
            ? `${AddCardByLinkStyles.button} ${AddCardByLinkStyles.button_disabled}`
            : AddCardByLinkStyles.button
        }
      >
        Отправить
      </button>
    </form>
  );
};

export default AddCardByLink;
