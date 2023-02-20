import React, { useEffect } from "react";
import AuthStyles from "./Auth.module.css";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

const Auth = ({ title, buttonTitle, handleClick, request }) => {
  const { values, errors, valid } = useSelector((state) => state.auth);

  const location = useLocation();

  const { handleChange, resetForm } = useForm();

  useEffect(() => {
    resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={AuthStyles.form_container}>
      <h1 className={AuthStyles.title}>{title}</h1>
      <form className={AuthStyles.form} onSubmit={handleClick}>
        <div className={AuthStyles.input_container}>
          <input
            type="email"
            name="email"
            placeholder={"Введите email"}
            onChange={handleChange}
            value={values.email || ""}
            className={AuthStyles.input_text}
          />
          {values.email.length !== 0 && (
            <span className={AuthStyles.error_text}>{errors.email}</span>
          )}
        </div>
        {location.pathname !== "/moderators" && (
          <div className={AuthStyles.input_container}>
            <input
              type="password"
              name="password"
              placeholder={"Введите пароль"}
              onChange={handleChange}
              value={values.password || ""}
              className={AuthStyles.input_text}
            />
            {values.password.length !== 0 && (
              <span className={AuthStyles.error_text}>{errors.password}</span>
            )}
          </div>
        )}
        <div className={AuthStyles.input_container}>
          <input
            type="submit"
            disabled={
              location.pathname !== "/moderators"
                ? !valid.email || !valid.password
                  ? true
                  : false
                : !valid.email
                ? true
                : false
            }
            value={buttonTitle}
            className={
              location.pathname !== "/moderators"
                ? !valid.email || !valid.password
                  ? `${AuthStyles.input_submit} ${AuthStyles.input_submit_disabled}`
                  : `${AuthStyles.input_submit}`
                : !valid.email
                ? `${AuthStyles.input_submit} ${AuthStyles.input_submit_disabled}`
                : `${AuthStyles.input_submit}`
            }
          />
          <span className={`${AuthStyles.error_text} ${AuthStyles.error_text_type_submit}`}>
            {errors.submit}
          </span>
        </div>
      </form>
      {request && (
        <div className={AuthStyles.loader_container}>
          <Loader width={30} height={30} fullPage={false} />
        </div>
      )}
    </div>
  );
};

export default Auth;
