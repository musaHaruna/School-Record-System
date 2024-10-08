import React, { useState } from "react";
import {
  menuLinks,
  otherLinks,
  teachersLink,
} from "../../pages/admin/menuLinks";
import { Link } from "react-router-dom";
import { Logo } from "../images";
import "../../assets/css/admin/adminMenu.css";
import { RiMenuFoldLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";

const Menu = () => {
  const [activeLink, setActiveLink] = useState(1);
  const [activeTeacherLink, setActiveTeacherLink] = useState(null);
  const [showTeacherLinks, setShowTeacherLinks] = useState(false); // New state variable

  const handleLinkClick = (link) => {
    setActiveLink(link.id);
    if (link.id === 2) {
      // If the link is the "Teachers" link (id 2), toggle the teacher links
      setShowTeacherLinks(!showTeacherLinks);
    } else {
      // If a different link is clicked, hide the teacher links
      setShowTeacherLinks(false);
    }
  };

  const handleTeacherLinkClick = (teacherLink) => {
    setActiveTeacherLink(teacherLink.id);
  };

  return (
    <article className="h-screen overflow-auto">
      <section className="flex items-center w-full justify-center p-7 admin-logo-container">
        <div className="admin-logo">
          <Logo />
        </div>
        {/* <div className='admin-sidebar'>
          <RiMenuFoldLine className="admin-sidebar" />
        </div> */}
      </section>
      <section className="admin-menus ">
        {menuLinks.map((link) => (
          <div
            key={link.id}
            className={activeLink === link.id ? "active-menu-border" : ""}
          >
            <div
              className={`admin-menu ${
                activeLink === link.id ? "active-menu-link" : "menu-links"
              }`}
            >
              <div className={activeLink === link.id ? "icon-active" : ""}>
                {link.id === 2 ? (
                  <div>
                    <GiTeacher />
                  </div>
                ) : (
                  link.icon
                )}
              </div>
              <Link
                to={link.url}
                className={`admin-menu`}
                onClick={() => handleLinkClick(link)}
              >
                <span className="listItemTitle">{link.title}</span>
                {link.id === 2 ? (
                  <div
                    className={activeLink === link.id ? "icon-active" : ""}
                    onClick={() => handleLinkClick(link)}
                  >
                    <IoIosArrowDown />
                  </div>
                ) : (
                  ""
                )}
              </Link>
            </div>
            {link.id === 2 && showTeacherLinks && (
              <div className="teachers-links-container">
                {teachersLink.map((teacherLink) => (
                  <div
                    className={`teachers-links ${
                      activeTeacherLink === teacherLink.id
                        ? "teacher-link-active"
                        : ""
                    }`}
                    key={teacherLink.id}
                  >
                    {teacherLink.icon}
                    <Link
                      className={`teacher-link ${
                        activeTeacherLink === teacherLink.id
                          ? "teacher-link-active"
                          : ""
                      }`}
                      to={teacherLink.url}
                      onClick={() => handleTeacherLinkClick(teacherLink)}
                    >
                      {teacherLink.title}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
      {/* <section className='admin-menus other-links'>
        {otherLinks.map((link) => (
          <div
            key={link.id}
            className={activeLink === link.id ? 'active-menu-border' : ''}
          >
            <div
              className={`admin-menu ${
                activeLink === link.id ? 'active-menu-link' : 'menu-links'
              }`}
            >
              <div className={activeLink === link.id ? 'icon-active' : ''}>
                {link.icon}
              </div>
              <Link
                to={link.url}
                className='admin-menu'
                onClick={() => handleLinkClick(link)}
              >
                <span className='listItemTitle'>{link.title}</span>
              </Link>
            </div>
          </div>
        ))}
      </section> */}
    </article>
  );
};

export default Menu;
