import "../../assets/css/admin/navbar.css";
import { Profile } from "../images";
import { AiOutlineBell } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import { PiHouseLineLight } from "react-icons/pi";
import { BsPerson, BsChatLeft } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const rotateIconClass = isOpen ? "rotate-upside-down" : "";

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };
  return (
    <article className="admin-navbar">
      <section className="admin-navbar-home">
        <div>
          <PiHouseLineLight className="admin-navbar-home-icon" />
        </div>
        <h3>Dashboard</h3>
      </section>
      <section className="admin-nav-search">
        <input type="text" placeholder="Search here..." />
      </section>
      <section>
        <div className="navbar-profile ">
          <div></div>
          <Profile />
          <div>
            <SlArrowDown
              className={`navbar-arrow ${rotateIconClass}`}
              onClick={toggleProfile}
            />
          </div>
          <div className={`navbar-dropdown ${isOpen ? "block" : "none"}`}>
            <div className="navbar-dropdown-profile">
              <div className="profile-size">
                <Profile />
              </div>
              <div>
                <h6>Fola Davis</h6>
                <p>Administrator</p>
              </div>
            </div>
            <div className="navbar-dropdown-content">
              <div>
                <BsPerson />
                <p>View Profile</p>
              </div>
              <div>
                <BsChatLeft />
                <p>Chat</p>
              </div>
              <div>
                <SlLogout />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Navbar;
