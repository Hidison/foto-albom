import React, { useEffect } from "react";
import ModeratedUser from "../components/ModeratedUser/ModeratedUser";
import { moderateUserAction } from "../services/actions/Moderators";
import { useDispatch, useSelector } from "react-redux";
import { where, query, collection } from "firebase/firestore";
import ModeratorsPageStyles from "./moderators.module.css";
import Auth from "../components/Auth/Auth";
import Loader from "../components/Loader/Loader";
import useFirestore from "../hooks/useFirestore";
import { useForm } from "../hooks/useForm";
import { Redirect } from "react-router-dom";
import { appFirestore } from "../firebase";
import {
  getModeratedUsers,
  getModeratedUsersFailed,
  getModeratedUsersSuccess,
} from "../services/Moderators";
import { setErrors } from "../services/Auth";

const ModeratorsPage = () => {
  const dispatch = useDispatch();
  const { moderatedUsers, getModeratedUsersRequest, getModeratedUsersFail } = useSelector(
    (state) => state.getModeratedUsers
  );
  const { values } = useSelector((state) => state.auth);
  const { moderateUserRequest, moderateUserSuccess } = useSelector((state) => state.moderateUser);
  const { user } = useSelector((state) => state.user);

  const { resetForm } = useForm();

  const q = query(collection(appFirestore, "users"), where("moderator", "==", true));

  useFirestore(getModeratedUsers, getModeratedUsersSuccess, getModeratedUsersFailed, q);

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
      dispatch(moderateUserAction(values.email));
    } else {
      dispatch(
        setErrors({
          email: "",
          password: "",
          submit: "Пользователь с таким email уже в списке модераторов.",
        })
      );
    }
  };

  if (user.email === "admin@mail.ru") {
    return (
      <div className={ModeratorsPageStyles.container}>
        <div>
          <h3>Список модераторов:</h3>
          {getModeratedUsersFail ? (
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
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }
};

export default ModeratorsPage;
