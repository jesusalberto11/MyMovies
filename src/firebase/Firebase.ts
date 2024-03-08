import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCx3We_0EwwZEJ4hP73yV9A9O8xzjLwlu4",
  authDomain: "my-movies-login.firebaseapp.com",
  projectId: "my-movies-login",
  storageBucket: "my-movies-login.appspot.com",
  messagingSenderId: "793715895477",
  appId: "1:793715895477:web:5747ecb99ba1bcefc1e2fc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
