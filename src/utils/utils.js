import { doc, deleteDoc } from "firebase/firestore";
import { appFirestore, timestamp } from "../firebase";

export const delImage = async (id) => {
  await deleteDoc(doc(appFirestore, "images", `${id}`));
};

export const addImageToBase = (url) => {
  const collectionRef = appFirestore.collection("images");
  const createdAt = timestamp();
  collectionRef.add({ url: url, createdAt: createdAt });
};
