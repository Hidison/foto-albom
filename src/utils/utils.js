import {
  doc,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  setDoc,
  collection,
  addDoc,
} from "firebase/firestore";
import { appFirestore, timestamp } from "../firebase";

export const delImageApi = async (id) => {
  await deleteDoc(doc(appFirestore, "images", `${id}`));
};

export const addImageToBaseApi = async (url, id, email) => {
  const createdAt = timestamp();
  await addDoc(collection(appFirestore, "images"), {
    url: url,
    createdAt: createdAt,
    verificated: 1,
    owner: id,
    ownerEmail: email,
    likes: [],
  });
};

export const addUserToBaseApi = async (email, id) => {
  const createdAt = timestamp();
  await setDoc(doc(appFirestore, "users", `${email}`), {
    moderator: false,
    createdAt: createdAt,
    email: email,
    id: id,
  });
};

export const verifyImageApi = async (id) => {
  await updateDoc(doc(appFirestore, "images", `${id}`), {
    verificated: 2,
  });
};

export const unModerateUserApi = async (email) => {
  await updateDoc(doc(appFirestore, "users", `${email}`), {
    moderator: false,
  });
};

export const moderateUserApi = async (email) => {
  await updateDoc(doc(appFirestore, "users", `${email}`), {
    moderator: true,
  });
};

export const likeImageApi = async (id, owner) => {
  await updateDoc(doc(appFirestore, "images", `${id}`), {
    likes: arrayUnion(`${owner}`),
  });
};

export const disLikeImageApi = async (id, owner) => {
  await updateDoc(doc(appFirestore, "images", `${id}`), {
    likes: arrayRemove(`${owner}`),
  });
};

export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getTotalPages = (totalPages) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }

  return result;
};

export const getPhotosOnPage = (photos, pageNumber) => {
  return photos.slice(pageNumber === 1 ? 0 : 8 * (pageNumber - 1), 8 * pageNumber);
};
