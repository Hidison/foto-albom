import React, { useEffect } from "react";
import AuthStyles from "./Auth.module.css";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";

const Auth = ({ title, buttonTitle, handleClick }) => {
  const { values, errors, valid } = useSelector((state) => state.auth);

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
        <div className={AuthStyles.input_container}>
          <input
            type="submit"
            disabled={!valid.email || !valid.password ? true : false}
            value={buttonTitle}
            className={
              !valid.email || !valid.password
                ? `${AuthStyles.input_submit} ${AuthStyles.input_submit_disabled}`
                : `${AuthStyles.input_submit}`
            }
          />
          <span className={`${AuthStyles.error_text} ${AuthStyles.error_text_type_submit}`}>
            {errors.submit}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Auth;
