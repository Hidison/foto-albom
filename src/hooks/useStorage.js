import { useEffect, useState } from "react";
import { appStorage } from "../firebase";
import { addImageToBase } from "../utils/utils";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

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
        addImageToBase(url);
      }
    );

    return () => {
      addImage();
    };
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
