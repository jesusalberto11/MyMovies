import "../styles/pages/Register.css";
import { useState } from "react";
import ErrorMessage from "../components/shared/ErrorMessage";
import FormLayout from "../components/layout/Form/FormLayout";
import { handleCreateUserWithEmailAndPassword } from "../firebase/Auth";
import { Link, useNavigate } from "react-router-dom";

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
      <FormLayout onSubmit={(e) => onSubmitCreateUserForm(e)}>
        <h1 className="pacifico-font">Register</h1>
        <div className="form-item flex">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            id="email"
            className="login-form-input"
            placeholder="Email *"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-item flex">
          <label htmlFor="password" hidden>
            Password
          </label>
          <input
            id="password"
            className="login-form-input"
            type="password"
            placeholder="Password *"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-item flex">
          <label htmlFor="r-password" hidden>
            Repeat password
          </label>
          <input
            id="r-password"
            className="login-form-input"
            type="password"
            placeholder="Repeat password *"
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
        <button className="login-button flex centered" type="submit">
          Register now
        </button>
        <div className="flex centered" style={{ gap: "5px" }}>
          <p>Already have an account</p>
          <Link to="/login" replace>
            Login now
          </Link>
        </div>
      </FormLayout>
    </div>
  );
};

export default Register;
