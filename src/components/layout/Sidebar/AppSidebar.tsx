import { SVG_ICONS } from "../../../helpers/svgIcons";
import "../../../styles/components/layout/Sidebar/AppSidebar.css";
import SimpleButton from "../../shared/SimpleButton";
import AppNavbar from "../Navbar/AppNavbar";

const AppSidebar = (props: {
  isSidebarOpen: boolean;
  closeSidebar: Function;
}) => {
  return (
    <aside
      className={props.isSidebarOpen ? "sidebar sidebar-active" : "sidebar"}
    >
      <div className="sidebar-header flex">
        <h1 className="pacifico-font app-title">MyMovies</h1>
        <SimpleButton
          showTitle={false}
          title="Close sidebar"
          icon={SVG_ICONS.CLOSE}
          onClickItem={props.closeSidebar}
        />
      </div>
      <hr />
      <AppNavbar align="center" />
      <hr />
    </aside>
  );
};

export default AppSidebar;
