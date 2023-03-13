import { useEffect, useState } from "react";
import { appStorage } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { addImageToBase } from "../services/actions/AddCardModal";

const useStorage = (file) => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const storageRef = appStorage.ref(file.name);

    const addImage = storageRef.put(file).on(
      "state_changed",
      (snap) => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
        dispatch(addImageToBase(url, user.id, user.email));
      }
    );

    return () => {
      addImage();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
