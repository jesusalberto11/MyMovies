import { Link } from "react-router-dom";
import "../../../styles/components/layout/Navbar/NavItem.css";

const NavItem = (props: { title: string; icon: string; to: string }) => {
  return (
    <Link className="nav-item centered" to={props.to} replace>
      <svg width="16" height="16" fill="#FFF" viewBox="0 0 16 16">
        <path d={props.icon} />
      </svg>
      {props.title}
    </Link>
  );
};

export default NavItem;
