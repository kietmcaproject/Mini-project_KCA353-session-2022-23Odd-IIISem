// saving new items

import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("category", "desc"))
  );
  // console.log(items);
  const res = items.docs.map((doc) => doc.data());
  // console.log(res);
  return res;
};

export const getAllUsers = async () => {
  const users = await getDocs(query(collection(firestore, "users")));
  const res = users.docs.map((doc) => doc.data());
  return res;
};

export const getAllOrders = async () => {
  const users = await getDocs(query(collection(firestore, "orders")));
  const res = users.docs.map((doc) => doc.data());
  return res;
};

export const getAdminMails = async () => {
  const users = await getDocs(query(collection(firestore, "users")));
  const res = users.docs
    .map((doc) => doc.data())
    .filter((usr) => usr.userType === "admin")
    .map((adm) => adm.email);
  return Array.from(res);
};

export const createUser = async (user) => {
  await setDoc(doc(firestore, "users", `${Date.now()}`), user, {
    merge: true,
  });
};
