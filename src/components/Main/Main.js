import React, { useEffect, useMemo } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import MainStyles from "./Main.module.css";
import MainPage from "../../pages/main";
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";
import { useSelector } from "react-redux";
import PhotoVerificationPage from "../../pages/photo-verification";
import useFirestore from "../../hooks/useFirestore";
import Modal from "../Modal/Modal";
import AddCardModal from "../AddCardModal/AddCardModal";
import FullSizeImg from "../FullSizeImg/FullSizeImg";
import ModeratorsPage from "../../pages/moderators";
import { GET_PHOTOS, GET_PHOTOS_FAILED, GET_PHOTOS_SUCCESS } from "../../services/actions/App";
import MyPhotosPage from "../../pages/my-photos";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { where, orderBy, collection, query } from "firebase/firestore";
import { appFirestore } from "../../firebase";

const Main = () => {
  const { user, getUserRequest } = useSelector((state) => state.user);
  const { modalVisible, modalImgVisible } = useSelector((state) => state.app);
  const { photos } = useSelector((state) => state.getPhotos);

  const location = useLocation();
  const history = useHistory();

  console.log(location.pathname);

  const q = query(
    collection(appFirestore, "images"),
    where("verificated", ">", 1),
    orderBy("verificated", "desc")
  );

  useFirestore(GET_PHOTOS, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILED, q);

  const myFotos = useMemo(
    () => user && photos && photos.filter((foto) => foto.owner === user.id),
    [photos, user]
  );

  useEffect(() => {
    if (location.pathname === "/") {
      history.push("/");
    }
  }, [history, location.pathname]);

  return (
    <main className={MainStyles.table}>
      <Switch>
        <Route path="/" exact={true}>
          <MainPage photos={photos} />
        </Route>
        <ProtectedRoute path="/moderators" exact={true}>
          <ModeratorsPage />
        </ProtectedRoute>
        <ProtectedRoute path="/photo-verification" exact={true}>
          <PhotoVerificationPage />
        </ProtectedRoute>
        <Route path="/login" exact={true}>
          {!getUserRequest && <LoginPage />}
        </Route>
        <Route path="/register" exact={true}>
          {!getUserRequest && <RegisterPage />}
        </Route>
        <ProtectedRoute path="/my-photos" exact={true}>
          <MyPhotosPage photos={myFotos} />
        </ProtectedRoute>
      </Switch>
      <Modal modalVisible={modalVisible}>
        <AddCardModal />
      </Modal>
      <Modal modalVisible={modalImgVisible}>
        <FullSizeImg />
      </Modal>
    </main>
  );
};

export default Main;
