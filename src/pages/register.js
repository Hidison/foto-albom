import React from "react";
import Auth from "../components/Auth/Auth";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../services/actions/Register";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { values, auth } = useSelector((state) => state.auth);

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(values.email, values.password));
  };

  if (auth) {
    return <Redirect to={"/"} />;
  }

  return (
    <Auth title={"Регистрация"} buttonTitle={"Зарегестрироваться"} handleClick={handleRegister} />
  );
};

export default RegisterPage;
