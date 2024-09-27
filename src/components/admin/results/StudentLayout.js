import { Navbar, Menu } from "../../components/admin";
import { Outlet } from "react-router-dom";
import "../../assets/css/admin/adminLayout.css";
const StudentLayout = () => {
  return (
    <div className="flex h-screen">
      {/* <div className="menuContainer hidden sm:flex">
        <Menu />
      </div> */}

      <div className="main-container h-screen">
        <Navbar />
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;
