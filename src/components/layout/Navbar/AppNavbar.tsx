import "../../../styles/components/layout/Navbar/AppNavbar.css";
import NavItem from "./NavItem";
import { SVG_ICONS } from "../../../helpers/svgIcons";

const AppNavbar = (props: { align: string }) => {
  return (
    <nav className="navbar flex">
      <ul
        className={
          props?.align === "center"
            ? "nav-items flex nav-items-vertical"
            : "nav-items flex nav-items-horizontal"
        }
      >
        <NavItem to="/" title="Home" icon={SVG_ICONS.HOME} />
        <NavItem to="search" title="Search" icon={SVG_ICONS.SEARCH} />
        <NavItem to="/" title="Watchlist" icon={SVG_ICONS.LIST} />
      </ul>
    </nav>
  );
};

export default AppNavbar;
