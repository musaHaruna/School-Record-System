import React, { useState } from 'react'
import { menuLinks, otherLinks } from '../../pages/admin/menuLinks'
import { Link } from 'react-router-dom'
import { Logo } from '../images'
import '../../assets/css/admin/adminMenu.css'

const Menu = () => {
  const [activeLink, setActiveLink] = useState(1)

  const handleLinkClick = (link) => {
    setActiveLink(link.id)
  }

  return (
    <article>
      <section className='admin-logo-container'>
        <div className='admin-logo'>
          <Logo />
        </div>
      </section>
      <section className='admin-menus'>
        {menuLinks.map((link) => (
          <div
            className={activeLink === link.id ? 'active-menu-border' : ''}
            key={link.id}
          >
            <Link
              to={link.url}
              className={`admin-menu ${
                activeLink === link.id ? 'active-menu-link' : ''
              }`}
              onClick={() => handleLinkClick(link)}
            >
              <span className='listItemTitle'>{link.title}</span>
            </Link>
          </div>
        ))}
      </section>
      <section className='admin-menus other-links '>
        {otherLinks.map((link) => (
          <div
            className={activeLink === link.id ? 'active-menu-border' : ''}
            key={link.id}
          >
            <Link
              to={link.url}
              className={`admin-menu ${
                activeLink === link.id ? 'active-menu-link' : ''
              }`}
              onClick={() => handleLinkClick(link)}
            >
              <span className='listItemTitle'>{link.title}</span>
            </Link>
          </div>
        ))}
      </section>
    </article>
  )
}

export default Menu
