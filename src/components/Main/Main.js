import React from "react";
import { Switch, Route } from "react-router-dom";
import MainStyles from "./Main.module.css";
import MainPage from "../../pages/main";
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";
import { useSelector } from "react-redux";

const Main = () => {
  const { getUserRequest } = useSelector((state) => state.user);

  return (
    <main className={MainStyles.table}>
      <Switch>
        <Route path="/" exact={true}>
          <MainPage />
        </Route>
        <Route path="/login" exact={true}>
          {!getUserRequest && <LoginPage />}
        </Route>
        <Route path="/register" exact={true}>
          {!getUserRequest && <RegisterPage />}
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
