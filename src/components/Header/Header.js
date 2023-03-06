import React from "react";
import HeaderStyles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/actions/App";

const Header = () => {
  const dispatch = useDispatch();

  const { user, getUserRequest } = useSelector((state) => state.user);

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.header__container}>
        <Link to="/foto-albom" className={HeaderStyles.header__title}>
          <h1>Fire Gram</h1>
        </Link>
        {user && (
          <Link to="/foto-albom/my-photos" className={HeaderStyles.header__container_auth}>
            Мои картинки
          </Link>
        )}
        {user && user.email === "admin@mail.ru" && (
          <Link to="/foto-albom/moderators" className={HeaderStyles.header__container_auth}>
            Модераторы
          </Link>
        )}
        {user && (user.moderator || user.email === "admin@mail.ru") && (
          <Link to="/foto-albom/photo-verification" className={HeaderStyles.header__container_auth}>
            Модерация картинок
          </Link>
        )}
        {getUserRequest ? (
          <></>
        ) : user ? (
          <div>
            <span>{user.email}</span>
            <button onClick={handleLogoutClick} className={HeaderStyles.header__exit_button}>
              Выйти
            </button>
          </div>
        ) : (
          <div>
            <Link to="/foto-albom/login" className={HeaderStyles.header__container_auth}>
              Войти
            </Link>
            <Link
              to="/foto-albom/register"
              className={`${HeaderStyles.header__container_auth} ${HeaderStyles.header__container_auth_reg}`}
            >
              Зарегестрироваться
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
