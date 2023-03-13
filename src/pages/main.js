import React, { useEffect } from "react";
import MainPageStyles from "./main.module.css";
import TablePhotos from "../components/TablePhotos/TablePhotos";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Pagination/Pagination";
import { getPageCount, getPhotosOnPage } from "../utils/utils";
import { setModalVisible } from "../services/App";
import { setImageSuccess } from "../services/AddCardModal";

const MainPage = ({ photos }) => {
  const dispatch = useDispatch();
  const { getPhotosRequest, getPhotosFailed } = useSelector((state) => state.getPhotos);
  const { addImageToBaseSuccess } = useSelector((state) => state.addImageToBase);
  const { pageNumber } = useSelector((state) => state.pagination);

  const photosOnPage = getPhotosOnPage(photos, pageNumber);
  const totalPages = getPageCount(photos.length, 8);

  const openModal = () => {
    dispatch(setModalVisible(true));
  };

  useEffect(() => {
    if (addImageToBaseSuccess) {
      setTimeout(() => {
        dispatch(setImageSuccess(false));
      }, 3000);
    }
  }, [addImageToBaseSuccess, dispatch]);

  return (
    <>
      <div className={MainPageStyles.header__title_container}>
        <h2 className={MainPageStyles.header__subtitle}>Твои фотографии</h2>
        <p className={MainPageStyles.header__text}>
          Нет никого, кто возлюбил бы, предпочел и возжаждал бы само страдание только за то, что это
          страдание
        </p>
        <button className={MainPageStyles.header__button} onClick={openModal}></button>
        {addImageToBaseSuccess && (
          <span className={MainPageStyles.success_notice_text}>
            Успешно! Фотография отправлена на модерацию.
          </span>
        )}
      </div>
      <div className={MainPageStyles.table}>
        {photosOnPage &&
          photosOnPage.map((cards, index) => <TablePhotos cards={cards} key={cards.id} />)}
      </div>
      {getPhotosFailed && (
        <div className={MainPageStyles.loader_container}>
          <p className={MainPageStyles.error_text}>Произошла ошибка при получении данных</p>
        </div>
      )}
      {getPhotosRequest && (
        <div className={MainPageStyles.loader_container}>
          <Loader width={50} height={50} fullPage={false} />
        </div>
      )}
      {photos.length > 8 && <Pagination totalPage={totalPages} />}
    </>
  );
};

export default MainPage;
