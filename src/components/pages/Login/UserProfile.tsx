import "../../../styles/components/pages/login/UserProfile.css";
import ActionButton from "../../shared/ActionButton";
import noImagePhoto from "../../../assets/no-photo.webp";
import { useAuth } from "../../../context/Auth";
import { SVG_ICONS } from "../../../helpers/svgIcons";

const UserProfile = (props: { handleLogOut: Function }) => {
  const { currentUser, isUserLoggedIn } = useAuth();

  return (
    <div className="user-profile-container flex centered">
      <h1 className="pacifico-font">Your profile</h1>
      <img
        src={currentUser?.photoURL ? currentUser?.photoURL : noImagePhoto}
        alt={currentUser?.displayName ? currentUser?.displayName : "User photo"}
        title={
          currentUser?.displayName ? currentUser?.displayName : "User photo"
        }
        className="user-profile-image"
      />
      <p className="user-profile-name">
        {isUserLoggedIn
          ? currentUser?.displayName
            ? currentUser?.displayName
            : currentUser?.email
          : "Guess"}
      </p>
      <ActionButton
        title="Log out"
        icon={SVG_ICONS.LOG_OUT}
        onClickButton={props.handleLogOut}
      />
    </div>
  );
};

export default UserProfile;
