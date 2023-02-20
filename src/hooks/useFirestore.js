import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onSnapshot } from "firebase/firestore";

const useFirestore = (request, request_success, request_failed, q) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: request,
    });
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        dispatch({
          type: request_success,
          payload: data,
          lastVisible: querySnapshot.docs[querySnapshot.docs.length - 1],
        });
      },
      (error) => {
        dispatch({
          type: request_failed,
          payload: error,
        });
      }
    );

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, request, request_failed, request_success]);
};

export default useFirestore;
