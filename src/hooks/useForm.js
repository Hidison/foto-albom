import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { setErrors, setValid, setValues } from "../services/Auth";

export function useForm() {
  const dispatch = useDispatch();
  const { values, errors, valid } = useSelector((state) => state.auth);
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (name, value) => {
    function resetError() {
      dispatch(
        setErrors({
          ...errors,
          [name]: "",
        })
      );
    }
    switch (name) {
      case "name": {
        if (value.length < 2) {
          dispatch(
            setErrors({
              ...errors,
              [name]: "Имя должно состоять минимум из 2-ух символов",
            })
          );

          return false;
        } else {
          resetError();
          return true;
        }
      }
      case "email": {
        if (!email.test(String(value))) {
          dispatch(
            setErrors({
              ...errors,
              [name]: "Введите корректный email",
            })
          );

          return false;
        } else {
          resetError();
          return true;
        }
      }
      case "password": {
        if (value.length < 6 || value.length > 20) {
          setErrors({
            ...errors,
            [name]: "Пароль должен быть от 6 до 20 символов",
          });
          return false;
        } else {
          resetError();
          return true;
        }
      }
      default:
        break;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setValues({ ...values, [name]: value }));
    dispatch(setValid({ ...valid, [name]: validate(name, value) }));
  };

  const resetForm = useCallback(
    (
      newValues = { email: "", password: "" },
      newErrors = { email: "", password: "", submit: "" },
      newIsValid = { email: false, password: false }
    ) => {
      setErrors(newErrors);
      dispatch(setValues(newValues));
      dispatch(setValid(newIsValid));
    },
    [dispatch]
  );

  return {
    handleChange,
    resetForm,
  };
}
