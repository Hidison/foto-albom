import { BrowserRouter as Router } from "react-router-dom";
import AppStyles from "./App.module.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { getUserAction } from "../../services/actions/App";
import { setAuth } from "../../services/Auth";

function App() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { delImageRequest } = useSelector((state) => state.delImage);
  const { likeImageRequest } = useSelector((state) => state.likeImage);
  const { disLikeImageRequest } = useSelector((state) => state.disLikeImage);
  const { logoutRequest } = useSelector((state) => state.logout);
  const { verifyImageRequest } = useSelector((state) => state.verifyImage);
  const { unModerateUserRequest } = useSelector((state) => state.unModerateUser);

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(setAuth(true));
    }
  }, [user, dispatch]);

  return (
    <Router>
      {(delImageRequest ||
        likeImageRequest ||
        disLikeImageRequest ||
        logoutRequest ||
        unModerateUserRequest ||
        verifyImageRequest) && (
        <div className={AppStyles.loader__full_container}>
          <Loader width={60} height={60} fullPage={true} />
        </div>
      )}
      <div style={{ padding: "0 30px 20px 30px" }}>
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export default App;
