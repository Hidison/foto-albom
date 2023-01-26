import React from "react";
import FullSizeImgStyles from "./FullSizeImg.module.css";
import { useSelector } from "react-redux";

const FullSizeImg = () => {
  const { selectedFoto } = useSelector((state) => state.app);

  if (!selectedFoto) {
    return null;
  } else return <img src={selectedFoto.url} alt="" className={FullSizeImgStyles.picture} />;
};

export default FullSizeImg;
