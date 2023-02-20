import React from "react";
import LoaderStyles from "./Loader.module.css";

const Loader = ({ width, height, fullPage }) => {
  return (
    <div
      style={{
        width: width,
        height: height,
      }}
      className={
        fullPage ? `${LoaderStyles.loader} ${LoaderStyles.loader__full_page}` : LoaderStyles.loader
      }
    ></div>
  );
};

export default Loader;
