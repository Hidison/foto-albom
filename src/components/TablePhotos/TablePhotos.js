import React, { useRef } from "react";
import TablePhotosStyles from "./TablePhotos.module.css";
import { useDispatch, useSelector } from "react-redux";
import { SET_SELECTED_FOTO, SET_MODAL_IMG_VISIBLE } from "../../services/actions/App";
import { useHistory } from "react-router-dom";
import { delImage, disLikeImage, likeImage, verifyImage } from "../../services/actions/TablePhotos";

const TablePhotos = ({ cards }) => {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  const handleDelClick = () => {
    dispatch(delImage(cards.id));
  };

  const handleVerifyPhoto = () => {
    dispatch(verifyImage(cards.id));
  };

  const history = useHistory();

  const handleLike = () => {
    if (auth && cards.likes.includes(user.id)) {
      dispatch(disLikeImage(cards.id, user.id));
    } else if (auth && !cards.likes.includes(user.id)) {
      dispatch(likeImage(cards.id, user.id));
    } else if (!auth) {
      history.push("/foto-albom/login");
    } else return;
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

  const tipCardRef = useRef();

  const addVisibleAuthButtonOnLike = () => {
    tipCardRef.current.className = TablePhotosStyles.cards_auth_button_active;
  };

  const delVisibleAuthButtonOnLike = () => {
    tipCardRef.current.className = TablePhotosStyles.cards_auth_button;
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{ backgroundImage: `url(${cards.url})` }}
        className={TablePhotosStyles.picture}
        onClick={handleFotoClick}
      ></div>
      <div className={TablePhotosStyles.owner_title}>{cards.ownerEmail}</div>
      {cards.verificated === 2 &&
        auth &&
        (cards.owner === user.id || user.moderator || user.email === "admin@mail.ru") && (
          <div className={TablePhotosStyles.deleteButton} onClick={handleDelClick}></div>
        )}
      {cards.verificated === 1 && (
        <div className={TablePhotosStyles.buttonContainer}>
          <button className={TablePhotosStyles.verifyButton} onClick={handleVerifyPhoto}>
            Добавить
          </button>
          <button
            style={{ borderLeft: "none" }}
            className={TablePhotosStyles.verifyButton}
            onClick={handleDelClick}
          >
            Удалить
          </button>
        </div>
      )}
      {cards.verificated === 2 && (
        <>
          <div className={TablePhotosStyles.likes_container}>
            <span className={TablePhotosStyles.likes}>{cards.likes.length}</span>
            <button
              className={
                user && cards.likes.includes(user.id)
                  ? `${TablePhotosStyles.likesButton} ${TablePhotosStyles.likesButton_active}`
                  : `${TablePhotosStyles.likesButton}`
              }
              onClick={handleLike}
              onPointerEnter={!auth ? addVisibleAuthButtonOnLike : null}
              onPointerLeave={!auth ? delVisibleAuthButtonOnLike : null}
            ></button>
          </div>
          <div ref={tipCardRef} className={TablePhotosStyles.cards_auth_button}>
            Войти, чтобы лайкнуть
          </div>
        </>
      )}
    </div>
  );
};

export default TablePhotos;
