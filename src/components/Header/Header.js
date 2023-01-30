import React from "react";
import HeaderStyles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/actions/App";

const Header = () => {
  const dispatch = useDispatch();

  const { currentUser, getUserRequest } = useSelector((state) => state.user);

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.header__container}>
        <Link to="/" className={HeaderStyles.header__title}>
          <h1>Fire Gram</h1>
        </Link>
        {getUserRequest ? (
          <></>
        ) : currentUser ? (
          <div>
            <span>{currentUser.email}</span>
            <button onClick={handleLogoutClick} className={HeaderStyles.header__exit_button}>
              Выйти
            </button>
          </div>
        ) : (
          <div>
            <Link to="/login" className={HeaderStyles.header__container_auth}>
              Войти
            </Link>
            <Link
              to="/register"
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
