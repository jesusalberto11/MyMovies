import "../../../styles/components/layout/Sidebar/SidebarCloseZone.css";

const SidebarCloseZone = (props: {
  isSidebarOpen: boolean;
  closeSidebar: Function;
}) => {
  return (
    <div
      className={
        props.isSidebarOpen ? "close-zone active-close-zone" : "close-zone"
      }
      role="presentation"
      onClick={() => props.closeSidebar()}
    ></div>
  );
};

export default SidebarCloseZone;
