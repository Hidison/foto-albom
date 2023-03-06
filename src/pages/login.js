import React from "react";
import Auth from "../components/Auth/Auth";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../services/actions/Login";
import { SET_ERRORS } from "../services/actions/Auth";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { values, auth } = useSelector((state) => state.auth);

  const { loginRequest } = useSelector((state) => state.login);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({
      type: SET_ERRORS,
      payload: {
        submit: "",
      },
    });
    dispatch(login(values.email, values.password));
  };

  if (auth) {
    return <Redirect to={"/"} />;
  }

  return (
    <Auth title={"Вход"} buttonTitle={"Войти"} handleClick={handleLogin} request={loginRequest} />
  );
};

export default LoginPage;
