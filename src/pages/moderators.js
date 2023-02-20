import React, { useEffect } from "react";
import ModeratedUser from "../components/ModeratedUser/ModeratedUser";
import {
  GET_MODERATED_USERS,
  GET_MODERATED_USERS_FAILED,
  GET_MODERATED_USERS_SUCCESS,
  moderateUser,
} from "../services/actions/Moderators";
import { useDispatch, useSelector } from "react-redux";
import { where, query, collection } from "firebase/firestore";
import ModeratorsPageStyles from "./moderators.module.css";
import Auth from "../components/Auth/Auth";
import Loader from "../components/Loader/Loader";
import useFirestore from "../hooks/useFirestore";
import { useForm } from "../hooks/useForm";
import { SET_ERRORS } from "../services/actions/Auth";
import { Redirect } from "react-router-dom";
import { appFirestore } from "../firebase";

const ModeratorsPage = () => {
  const dispatch = useDispatch();
  const { moderatedUsers, getModeratedUsersRequest, getModeratedUsersFailed } = useSelector(
    (state) => state.getModeratedUsers
  );
  const { values } = useSelector((state) => state.auth);
  const { moderateUserRequest, moderateUserSuccess } = useSelector((state) => state.moderateUser);
  const { user } = useSelector((state) => state.user);

  const { resetForm } = useForm();

  const q = query(collection(appFirestore, "users"), where("moderator", "==", true));

  useFirestore(GET_MODERATED_USERS, GET_MODERATED_USERS_SUCCESS, GET_MODERATED_USERS_FAILED, q);

  const moderatedUsersEmails = moderatedUsers.map((user) => user.email);

  useEffect(() => {
    if (moderateUserSuccess) {
      resetForm();
    }
  }, [moderateUserSuccess, resetForm]);

  const handleAddModeratedUser = (e) => {
    e.preventDefault();
    resetForm();
    if (!moderatedUsersEmails.includes(values.email)) {
      dispatch(moderateUser(values.email));
    } else {
      dispatch({
        type: SET_ERRORS,
        payload: {
          submit: "Пользователь с таким email уже в списке модераторов.",
        },
      });
    }
  };

  console.log(user.email);

  if (user.email === "admin@mail.ru") {
    return (
      <div className={ModeratorsPageStyles.container}>
        <div>
          <h3>Список модераторов:</h3>
          {getModeratedUsersFailed ? (
            <p className={ModeratorsPageStyles.error_text}>Произошла ошибка при получении данных</p>
          ) : getModeratedUsersRequest ? (
            <div className={ModeratorsPageStyles.loader__container}>
              <Loader width={30} height={30} fullPage={false} />
            </div>
          ) : (
            <ul className={ModeratorsPageStyles.list}>
              {moderatedUsers !== 0 &&
                moderatedUsers.map((user, index) => <ModeratedUser user={user} key={user.id} />)}
            </ul>
          )}
        </div>
        <div>
          <Auth
            title={"Добавить модератора:"}
            buttonTitle={"Добавить"}
            handleClick={handleAddModeratedUser}
            request={moderateUserRequest}
          />
        </div>
      </div>
    );
  } else {
    return <Redirect
      to={{
        pathname: "/",
      }}
    />;
  }
};

export default ModeratorsPage;
