import React from "react";
import ModeratedUserStyles from "./ModeratedUser.module.css";
import { useDispatch } from "react-redux";
import { unModerateUserAction } from "../../services/actions/ModeratedUser";

const ModeratedUser = ({ user }) => {
  const dispatch = useDispatch();

  const handleUnModerateUserButtonClick = () => {
    dispatch(unModerateUserAction(user.email));
  };

  return (
    <li className={ModeratedUserStyles.container}>
      <span className={ModeratedUserStyles.text}>{user.email}</span>
      <button
        className={ModeratedUserStyles.delButon}
        onClick={handleUnModerateUserButtonClick}
      ></button>
    </li>
  );
};

export default ModeratedUser;
