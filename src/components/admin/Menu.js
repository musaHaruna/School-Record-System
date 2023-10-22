import React, { useState } from 'react'
import { menuLinks, otherLinks } from '../../pages/admin/menuLinks'
import { Link } from 'react-router-dom'
import { Logo } from '../images'
import '../../assets/css/admin/adminMenu.css'
import { RiMenuFoldLine } from 'react-icons/ri'

const Menu = () => {
  const [activeLink, setActiveLink] = useState(1)

  const handleLinkClick = (link) => {
    setActiveLink(link.id)
  }

  return (
    <article>
      <section className='admin-logo-container'>
        <div className='admin-sidebar'>
          <RiMenuFoldLine className='admin-sidebar' />
        </div>
        <div className='admin-logo'>
          <Logo />
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
                {link.icon}
              </div>
              <Link
                to={link.url}
                className={`admin-menu`}
                onClick={() => handleLinkClick(link)}
              >
                <span className='listItemTitle'>{link.title}</span>
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
  )
}

export default Menu
