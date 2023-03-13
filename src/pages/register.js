import React from "react";
import Auth from "../components/Auth/Auth";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../services/actions/Register";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { values, auth } = useSelector((state) => state.auth);
  const { registerRequest } = useSelector((state) => state.register);

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerAction(values.email, values.password));
  };

  if (auth) {
    return <Redirect to={"/"} />;
  }

  return (
    <Auth
      title={"Регистрация"}
      buttonTitle={"Зарегестрироваться"}
      handleClick={handleRegister}
      request={registerRequest}
    />
  );
};

export default RegisterPage;
