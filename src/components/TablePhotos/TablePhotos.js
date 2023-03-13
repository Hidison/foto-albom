import React, { useRef } from "react";
import TablePhotosStyles from "./TablePhotos.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  delImageAction,
  disLikeImageAction,
  likeImageAction,
  verifyImageAction,
} from "../../services/actions/TablePhotos";
import { setModalImgVisible, setSelectedFoto } from "../../services/App";

const TablePhotos = ({ cards }) => {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  const handleDelClick = () => {
    dispatch(delImageAction(cards.id));
  };

  const handleVerifyPhoto = () => {
    dispatch(verifyImageAction(cards.id));
  };

  const history = useHistory();

  const handleLike = () => {
    if (auth && cards.likes.includes(user.id)) {
      dispatch(disLikeImageAction(cards.id, user.id));
    } else if (auth && !cards.likes.includes(user.id)) {
      dispatch(likeImageAction(cards.id, user.id));
    } else if (!auth) {
      history.push("/login");
    } else return;
  };

  const handleFotoClick = () => {
    dispatch(setSelectedFoto(cards));
    dispatch(setModalImgVisible(true));
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
