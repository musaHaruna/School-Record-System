import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { menuLinks, teachersLink } from "../../pages/admin/menuLinks";
import { Link } from "react-router-dom";
import { Logo } from "../images";
import "../../assets/css/admin/adminMenu.css";
import { RiMenuFoldLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";

const MobileSideBar = () => {
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
    <Sheet side="left">
      <SheetTrigger asChild>
        <RiMenuFoldLine className="cursor-pointer text-[#4a3aff] text-[25px]" />
      </SheetTrigger>
      <SheetContent side="left">
        <section className="flex items-center w-full justify-center p-7 admin-logo-container">
          <div className="admin-logo">
            <Logo />
          </div>
          {/* <div className='admin-sidebar'>
          <RiMenuFoldLine className="admin-sidebar" />
            </div> */}
        </section>

        <section className="w-full ">
          {menuLinks.map((link) => (
            <div
              key={link.id}
              className={activeLink === link.id ? "active-menu-border" : ""}
            >
              <SheetClose asChild key={link.id}>
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
                  <SheetClose asChild>
                    <Link
                      to={link.url}
                      className={`admin-menu`}
                      onClick={() => handleLinkClick(link)}
                    >
                      <span className="listItemTitle">{link.title}</span>
                      {/* {link.id === 2 ? (
                  <div
                    className={activeLink === link.id ? 'icon-active' : ''}
                    onClick={() => handleLinkClick(link)}
                  >
                    <IoIosArrowDown />
                  </div>
                ) : (
                  ''
                )} */}
                    </Link>
                  </SheetClose>
                </div>
              </SheetClose>
              {/* {link.id === 2 && showTeacherLinks && (
              <div className='teachers-links-container'>
                {teachersLink.map((teacherLink) => (
                  <div
                    className={`teachers-links ${
                      activeTeacherLink === teacherLink.id
                        ? 'teacher-link-active'
                        : ''
                    }`}
                    key={teacherLink.id}
                  >
                    {teacherLink.icon}
                    <Link
                      className={`teacher-link ${
                        activeTeacherLink === teacherLink.id
                          ? 'teacher-link-active'
                          : ''
                      }`}
                      to={teacherLink.url}
                      onClick={() => handleTeacherLinkClick(teacherLink)}
                    >
                      {teacherLink.title}
                    </Link>
                  </div>
                ))}
              </div>
            )} */}
            </div>
          ))}
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
