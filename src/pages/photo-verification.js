import React from "react";
import TablePhotos from "../components/TablePhotos/TablePhotos";
import PhotoVerificationPageStyles from "./photo-verification.module.css";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { where, orderBy, query, collection } from "firebase/firestore";
import useFirestore from "../hooks/useFirestore";
import { appFirestore } from "../firebase";
import { getPageCount, getPhotosOnPage } from "../utils/utils";
import Pagination from "../components/Pagination/Pagination";
import {
  getNotVerifyPhotos,
  getNotVerifyPhotosFailed,
  getNotVerifyPhotosSuccess,
} from "../services/PhotoVerification";

const PhotoVerificationPage = () => {
  const { user } = useSelector((state) => state.user);
  const { notVerifyPhotos } = useSelector((state) => state.getNotVerifyPhotos);
  const { pageNumber } = useSelector((state) => state.pagination);

  const photosOnPage = notVerifyPhotos && getPhotosOnPage(notVerifyPhotos, pageNumber);
  const totalPages = notVerifyPhotos && getPageCount(notVerifyPhotos.length, 8);

  const q = query(
    collection(appFirestore, "images"),
    where("verificated", "<=", 1),
    orderBy("verificated", "desc")
  );

  useFirestore(getNotVerifyPhotos, getNotVerifyPhotosSuccess, getNotVerifyPhotosFailed, q);

  if (user.email === "admin@mail.ru" || user.moderator) {
    return (
      <>
        <div className={PhotoVerificationPageStyles.table}>
          {photosOnPage && photosOnPage.length !== 0 ? (
            photosOnPage.map((cards, index) => <TablePhotos cards={cards} key={cards.id} />)
          ) : (
            <span>Нет картинок для модерации.</span>
          )}
        </div>
        {notVerifyPhotos.length > 8 && <Pagination totalPage={totalPages} />}
      </>
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

export default PhotoVerificationPage;
