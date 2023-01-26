import React from "react";
import TablePhotosStyles from "./TablePhotos.module.css";
import { delImage } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { SET_SELECTED_FOTO, SET_MODAL_IMG_VISIBLE } from "../../services/actions/App";

const TablePhotos = ({ cards }) => {
  const dispatch = useDispatch();

  const handleDelClick = async (id) => {
    delImage(cards.id);
  };

  const handleFotoClick = () => {
    dispatch({
      type: SET_SELECTED_FOTO,
      payload: cards,
    });
    dispatch({
      type: SET_MODAL_IMG_VISIBLE,
      payload: true,
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{ backgroundImage: `url(${cards.url})` }}
        className={TablePhotosStyles.picture}
        onClick={handleFotoClick}
      ></div>
      <div className={TablePhotosStyles.deleteButton} onClick={handleDelClick}></div>
    </div>
  );
};

export default TablePhotos;
