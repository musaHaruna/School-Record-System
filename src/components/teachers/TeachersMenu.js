import React, { useState } from 'react'
import { menuLinks, otherLinks } from '../../pages/teachers/teachersMenuLinks'
import { Link } from 'react-router-dom'
import { Logo } from '../images'
import '../../assets/css/admin/adminMenu.css'
import { RiMenuFoldLine } from 'react-icons/ri'
import { GiTeacher } from 'react-icons/gi'
import avatar from '../../assets/images/profile.png'
import Wrapper from '../../assets/css/teacher/TeachersMenuLinks'

const TeachersMenu = () => {
  const [activeLink, setActiveLink] = useState(1)
  const [activeTeacherLink, setActiveTeacherLink] = useState(null)
  const [showTeacherLinks, setShowTeacherLinks] = useState(false) // New state variable

  const handleLinkClick = (link) => {
    setActiveLink(link.id)
    if (link.id === 2) {
      // If the link is the "Teachers" link (id 2), toggle the teacher links
      setShowTeacherLinks(!showTeacherLinks)
    } else {
      // If a different link is clicked, hide the teacher links
      setShowTeacherLinks(false)
    }
  }

  return (
    <Wrapper>
      <article>
        <section className='admin-logo-container'>
          <div className='admin-sidebar'>
            <RiMenuFoldLine className='admin-sidebar' />
          </div>
          <div className='admin-logo'>
            <Logo />
          </div>
        </section>

        <section className='teachers-profile'>
          <div className='teachers-img' >
            <img src={avatar} alt='' />
          </div>
          <div className='content'>
            <h5>Olamide Akintan</h5>
            <p>olamideakintan@gmail.com</p>
            <p className='school-id'>
              School ID <span>#22352</span>
            </p>
          </div>
        </section>
        <section className='admin-menus '>
          {menuLinks.map((link) => (
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
                  <span className='listItemTitle'>{link.title}</span>
                  <div
                    className={activeLink === link.id ? 'icon-active' : ''}
                    onClick={() => handleLinkClick(link)}
                  ></div>
                </Link>
              </div>
            </div>
          ))}
        </section>
        <section className='admin-menus other-links'>
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
        </section>
      </article>
    </Wrapper>
  )
}

export default TeachersMenu
