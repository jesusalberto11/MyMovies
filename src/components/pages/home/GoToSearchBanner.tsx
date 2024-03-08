import "../../../styles/pages/home/GoToSearchBanner.css";
import NavItem from "../../layout/Navbar/NavItem";
import { SVG_ICONS } from "../../../helpers/svgIcons";

const GoToSearchBanner = () => {
  return (
    <div className="go-to-search-banner flex centered">
      <p>Don't find what you're looking for?</p>
      <p>Search for it</p>
      <NavItem to="search" title="GO TO SEARCH" icon={SVG_ICONS.SEARCH} />
    </div>
  );
};

export default GoToSearchBanner;
