import "../../styles/shared/UserInfo.css";
import noImagePhoto from "../../assets/no-photo.webp";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";

const UserInfo = () => {
  const { currentUser, isUserLoggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <div
      className={"user-info-container flex centered"}
      style={{
        backgroundImage: isUserLoggedIn
          ? currentUser?.photoURL
            ? `url(${currentUser?.photoURL})`
            : `url(${noImagePhoto})`
          : "",
      }}
      onClick={() => navigate("/login")}
      title={
        isUserLoggedIn
          ? currentUser?.displayName
            ? currentUser?.displayName
            : currentUser?.email
          : "Go to login"
      }
    >
      {!isUserLoggedIn && "G"}
    </div>
  );
};

export default UserInfo;
