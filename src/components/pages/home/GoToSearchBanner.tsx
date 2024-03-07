import { SVG_ICONS } from "../../../helpers/svgIcons";
import "../../../styles/pages/home/GoToSearchBanner.css";
import SimpleButton from "../../shared/SimpleButton";

const GoToSearchBanner = () => {
  return (
    <div className="go-to-search-banner flex centered">
      <p>Don't find what you're looking for?</p>
      <p>Search for it</p>
      <form className="flex centered" style={{ gap: "10px" }}>
        <label aria-label="hidden" htmlFor="search" />
        <input
          name="search"
          id="search"
          className="searchbar"
          type="search"
          placeholder="Type the name"
        />
        <SimpleButton
          showTitle={false}
          title="Search"
          icon={SVG_ICONS.SEARCH}
        />
      </form>
    </div>
  );
};

export default GoToSearchBanner;
