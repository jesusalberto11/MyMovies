import { useState } from "react";
import "../styles/pages/Login.css";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doSignOut,
} from "../firebase/Auth";
import { useAuth } from "../context/Auth";
import UserProfile from "../components/pages/Login/UserProfile";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/pages/Login/LoginForm";
import ErrorMessage from "../components/shared/ErrorMessage";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, isUserLoggedIn } = useAuth();

  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onEmailSignIn = (e: any, email: string, password: string) => {
    e.preventDefault();

    if (!isSigningIn) {
      setIsSigningIn(true);

      doSignInWithEmailAndPassword(email, password)
        .then(() => navigate("/"))
        .catch((err: any) => {
          setIsSigningIn(false);
          setErrorMessage("Email or password are invalid.");
          console.error("[ERROR] While trying to log in with email" + err);
        });
    }
  };

  const onGoogleSignIn = (e: any) => {
    e.preventDefault();

    if (!isSigningIn) {
      setIsSigningIn(true);

      doSignInWithGoogle()
        .then(() => navigate("/"))
        .catch((err: any) => {
          setIsSigningIn(false);
          setErrorMessage(
            "A error ocurred while trying to sigin with Google, try again later."
          );
          console.error("[ERROR] While trying to log in with Google" + err);
        });
    }
  };

  const handleLogOut = () => {
    setIsSigningIn(false);
    doSignOut().then(() => navigate("/"));
  };

  return (
    <div className="login-page flex">
      {errorMessage !== "" && (
        <ErrorMessage
          message={errorMessage}
          close={() => setErrorMessage("")}
        />
      )}
      <>
        {isUserLoggedIn ? (
          <UserProfile handleLogOut={handleLogOut} />
        ) : (
          <LoginForm
            onSubmitForm={onEmailSignIn}
            onGoogleSignIn={onGoogleSignIn}
          />
        )}
      </>
    </div>
  );
};

export default Login;
