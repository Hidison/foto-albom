import React from "react";
import TablePhotos from "../components/TablePhotos/TablePhotos";
import MyPhotosPageStyles from "./main.module.css";
import { useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Pagination/Pagination";
import { getPageCount, getPhotosOnPage } from "../utils/utils";

const MyPhotosPage = ({ photos }) => {
  const { pageNumber } = useSelector((state) => state.pagination);
  const { getPhotosRequest, getPhotosFailed } = useSelector((state) => state.getPhotos);

  const photosOnPage = getPhotosOnPage(photos, pageNumber);
  const totalPages = getPageCount(photos.length, 8);

  return (
    <>
      {getPhotosRequest ? (
        <div className={MyPhotosPageStyles.loader_container}>
          <Loader width={30} height={30} fullPage={false} />
        </div>
      ) : getPhotosFailed ? (
        <p className={MyPhotosPageStyles.error_text}>Ошибка загрузки сохраненных картинок.</p>
      ) : (
        <div className={MyPhotosPageStyles.table}>
          {photosOnPage && photosOnPage.length !== 0 ? (
            photosOnPage.map((cards, index) => <TablePhotos cards={cards} key={cards.id} />)
          ) : (
            <span>Нет добавленных картинок.</span>
          )}
        </div>
      )}
      {photos.length > 8 && <Pagination totalPage={totalPages} />}
    </>
  );
};

export default MyPhotosPage;
