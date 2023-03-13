import React from "react";
import Auth from "../components/Auth/Auth";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../services/actions/Login";
import { setErrors } from "../services/Auth";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { values, auth } = useSelector((state) => state.auth);

  const { loginRequest } = useSelector((state) => state.login);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(
      setErrors({
        submit: "",
      })
    );
    dispatch(loginAction(values.email, values.password));
  };

  if (auth) {
    return <Redirect to={"/"} />;
  }

  return (
    <Auth title={"Вход"} buttonTitle={"Войти"} handleClick={handleLogin} request={loginRequest} />
  );
};

export default LoginPage;
