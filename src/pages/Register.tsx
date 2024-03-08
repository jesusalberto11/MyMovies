import { useEffect, useState } from "react";
import "../styles/pages/Register.css";
import ActionButton from "../components/shared/ActionButton";
import ErrorMessage from "../components/shared/ErrorMessage";
import { handleCreateUserWithEmailAndPassword } from "../firebase/Auth";
import { useNavigate } from "react-router-dom";
import { SVG_ICONS } from "../helpers/svgIcons";

const Register = () => {
  const navigate = useNavigate();

  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSubmitCreateUserForm = async (e: any) => {
    e.preventDefault();

    if (
      password.length < 6 ||
      repeatPassword.length < 6 ||
      password !== repeatPassword
    )
      return;

    if (!isSigningIn) {
      setIsSigningIn(true);

      await handleCreateUserWithEmailAndPassword(email, password)
        .then(() => {
          navigate("/");
        })
        .catch((e: any) => {
          setErrorMessage("The email it's already on use.");
          setIsSigningIn(false);
          console.error("[ERROR] while creating the account: ", e);
        });
    }
  };

  return (
    <div className="register-page flex">
      {errorMessage !== "" && (
        <ErrorMessage
          message={errorMessage}
          close={() => setErrorMessage("")}
        />
      )}
      <form
        className="register-form-container flex centered"
        onSubmit={(e) => onSubmitCreateUserForm(e)}
      >
        <h1 className="pacifico-font">Register</h1>
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
        <div className="form-item flex">
          <label htmlFor="r-password">Repeat password</label>
          <input
            id="r-password"
            className="login-input"
            type="password"
            placeholder="Repeat password"
            required
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        <p
          className="password-checker"
          style={{
            backgroundColor: password.length > 6 ? "#2a9d8f" : "#e63946",
          }}
        >
          Password should be at least 7 characters long
        </p>
        <p
          className="password-checker"
          style={{
            backgroundColor:
              password.length !== 0 && password === repeatPassword
                ? "#2a9d8f"
                : "#e63946",
          }}
        >
          Passwords should match
        </p>
        <div className="flex centered" style={{ gap: "15px" }}>
          <ActionButton
            title="Go back"
            icon={SVG_ICONS.GO_BACK}
            type="button"
            onClickButton={() => navigate("/login")}
          />
          <ActionButton
            title="Create user"
            icon={SVG_ICONS.CHECK}
            type="submit"
            onClickButton={() => {}}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
