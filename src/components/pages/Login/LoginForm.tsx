import { useState } from "react";
import "../../../styles/components/pages/login/LoginForm.css";
import ActionButton from "../../shared/ActionButton";
import { SVG_ICONS } from "../../../helpers/svgIcons";
import { useNavigate } from "react-router-dom";
import NavItem from "../../layout/Navbar/NavItem";

const LoginForm = (props: { onSubmitForm: any; onGoogleSignIn: Function }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className="form-container flex centered"
      onSubmit={(e) => props.onSubmitForm(e, email, password)}
    >
      <h1 className="pacifico-font">Sign In</h1>
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
      <ActionButton
        title="Sign In"
        icon={SVG_ICONS.LOG_IN}
        type="submit"
        onClickButton={() => {}}
      />
      <ActionButton
        title="Create account"
        icon={SVG_ICONS.CREATE_ACCOUT}
        type="button"
        onClickButton={() => {
          navigate("../register", { replace: true });
        }}
      />
      <ActionButton
        title="Enter with Google"
        icon={SVG_ICONS.GOOGLE}
        type="button"
        onClickButton={props.onGoogleSignIn}
      />
      <NavItem title="Go back to home" icon={SVG_ICONS.HOME} to="/" />
    </form>
  );
};

export default LoginForm;
