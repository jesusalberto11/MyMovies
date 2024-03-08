import { useState } from "react";
import "../styles/pages/Login.css";
import {
  doSignInWithGoogle,
  doSignOut,
  handleCreateUserWithEmailAndPassword,
} from "../firebase/Auth";
import { useAuth } from "../context/Auth";

const Login = () => {
  const { currentUser, isUserLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await handleCreateUserWithEmailAndPassword(email, password);
    }
  };

  const onGoogleSignIn = (e: any) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((err: any) => {
        setIsSigningIn(false);
        console.error(err);
      });
    }
  };

  return (
    <div className="login-page flex">
      <h1 className="pacifico-font">Sign In</h1>
      {currentUser?.displayName ? currentUser?.displayName : currentUser?.email}
      {isUserLoggedIn ? "true" : "false"}
      <form className="form-container flex centered" onSubmit={onSubmit}>
        {
          <button
            onClick={() => {
              doSignOut();
            }}
          >
            Logout
          </button>
        }
        <div className="form-item flex">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="login-input"
            placeholder="Email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-item flex">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="login-input"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button> Signin</button>
        <button
          onClick={(e) => {
            onGoogleSignIn(e);
          }}
        >
          {" "}
          Signin with google
        </button>
        <button> logOut</button>
      </form>
    </div>
  );
};

export default Login;
