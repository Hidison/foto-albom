export const SET_MODAL_VISIBLE = "SET_MODAL_VISIBLE";
export const SET_MODAL_IMG_VISIBLE = "SET_MODAL_IMG_VISIBLE";

export const SET_SELECTED_FOTO = "SET_SELECTED_FOTO";
export const SET_IS_FILE_LOADING = "SET_IS_FILE_LOADING";

export const closeModal = () => {
  return function (dispatch) {
    dispatch({
      type: SET_MODAL_VISIBLE,
      payload: false,
    });
    dispatch({
      type: SET_MODAL_IMG_VISIBLE,
      payload: false,
    });
  };
};
