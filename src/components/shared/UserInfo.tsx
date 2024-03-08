import "../../styles/shared/UserInfo.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";

const UserInfo = () => {
  const { currentUser, isUserLoggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <div
      className={"user-info-container flex centered"}
      style={{
        backgroundImage: isUserLoggedIn && `url(${currentUser?.photoURL})`,
      }}
      onClick={() => navigate("/login")}
      title={isUserLoggedIn ? `${currentUser?.displayName} photo ` : "Login"}
    >
      {!isUserLoggedIn && "G"}
    </div>
  );
};

export default UserInfo;
