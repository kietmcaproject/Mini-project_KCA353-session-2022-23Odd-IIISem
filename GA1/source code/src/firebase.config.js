import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAv3fdmxEsTkcA0Ox6KNLCLrgHjBukQrKU",
  authDomain: "restaurantapp-c061e.firebaseapp.com",
  databaseURL: "https://restaurantapp-c061e-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-c061e",
  storageBucket: "restaurantapp-c061e.appspot.com",
  messagingSenderId: "163428038173",
  appId: "1:163428038173:web:f15c3e1c4dad4ff18138f4",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
