import "../../../styles/components/pages/login/LoginForm.css";
import { useState } from "react";
import ActionButton from "../../shared/ActionButton";
import { SVG_ICONS } from "../../../helpers/svgIcons";
import { Link } from "react-router-dom";
import FormLayout from "../../layout/Form/FormLayout";

const LoginForm = (props: { onSubmitForm: any; onGoogleSignIn: Function }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <FormLayout onSubmit={(e) => props.onSubmitForm(e, email, password)}>
      <h1 className="pacifico-font">Welcome back!</h1>
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
      <button className="login-button flex centered" type="submit">
        Login
      </button>
      <div className="flex centered" style={{ gap: "10px" }}>
        <hr />
        <p>OR</p>
        <hr />
      </div>
      <ActionButton
        title="Enter with Google"
        icon={SVG_ICONS.GOOGLE}
        type="button"
        onClickButton={props.onGoogleSignIn}
      />
      <div className="flex centered" style={{ gap: "5px" }}>
        <p>Don't have an account?</p>
        <Link to="/register" replace>
          Signup
        </Link>
      </div>
      <Link to="/" replace>
        Go back to home
      </Link>
    </FormLayout>
  );
};

export default LoginForm;
