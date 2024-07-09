import { Navbar, Menu } from "../../components/admin";
import { Outlet } from "react-router-dom";
import "../../assets/css/admin/adminLayout.css";
const Layout = () => {
  return (
    <div className="main-layout">
      <div className="menuContainer">
        <Menu />
      </div>

      <div className="main-container">
        <Navbar />
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
