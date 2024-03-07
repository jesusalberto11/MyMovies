import "../../styles/components/layout/AppHeader.css";
import AppNavbar from "./Navbar/AppNavbar";
import AppSidebar from "./Sidebar/AppSidebar";
import SidebarCloseZone from "./Sidebar/SidebarCloseZone";
import { useSidebar } from "../../hooks/useSidebar";
import SimpleButton from "../shared/SimpleButton";
import { SVG_ICONS } from "../../helpers/svgIcons";

const AppHeader = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();

  return (
    <header className="header">
      <div className="flex centered" style={{ gap: "20px" }}>
        <AppSidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <SidebarCloseZone
          isSidebarOpen={isSidebarOpen}
          closeSidebar={closeSidebar}
        />
        <div id="toggle-sidebar">
          <SimpleButton
            showTitle={false}
            title="Open sidebar"
            icon={SVG_ICONS.THREE_LINES}
            onClickItem={openSidebar}
          />
        </div>
        <h1 className="pacifico-font app-title">MyMovies</h1>
      </div>
      <AppNavbar align="horizontal" />
    </header>
  );
};

export default AppHeader;
