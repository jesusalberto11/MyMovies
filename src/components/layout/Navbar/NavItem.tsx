import "../../../styles/components/layout/Navbar/NavItem.css";

const NavItem = (props: { title: string; icon: string }) => {
  return (
    <li className="nav-item centered">
      <svg width="16" height="16" fill="#FFF" viewBox="0 0 16 16">
        <path d={props.icon} />
      </svg>
      <a>{props.title}</a>
    </li>
  );
};

export default NavItem;
