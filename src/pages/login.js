import React from "react";
import Auth from "../components/Auth/Auth";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../services/actions/Login";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { values, auth } = useSelector((state) => state.auth);

  console.log(auth);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(values.email, values.password));
  };

  if (auth) {
    return <Redirect to={"/"} />;
  }

  return <Auth title={"Вход"} buttonTitle={"Войти"} handleClick={handleLogin} />;
};

export default LoginPage;
