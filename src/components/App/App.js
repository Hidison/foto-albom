import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../services/actions/App";
import { SET_AUTH } from "../../services/actions/Auth";

function App() {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state.auth);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      dispatch({
        type: SET_AUTH,
        payload: true,
      });
    }
  }, [currentUser, dispatch]);

  useEffect(() => {
    dispatch(getUser());
  }, [auth, dispatch]);

  return (
    <Router>
      <div style={{ padding: "0 30px 20px 30px" }}>
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export default App;
