import { Navbar } from "../../components/admin";
import { Outlet } from "react-router-dom";
import "../../assets/css/admin/adminLayout.css";
const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* <div className="menuContainer hidden sm:flex">
        <Menu />
      </div> */}

      <div className="main-container h-screen">
      {/* passing a prop to the navbar which would determine the type of side bar to be triggered i.e admin-sidebar, teacher-sidebar */}
        <Navbar />
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
