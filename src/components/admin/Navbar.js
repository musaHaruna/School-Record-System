import '../../assets/css/admin/navbar.css'
import { Profile } from '../images'
import { AiOutlineBell } from 'react-icons/ai'
import { SlArrowDown } from 'react-icons/sl'
import { PiHouseLineLight } from 'react-icons/pi'

const Navbar = () => {
  return (
    <article className='admin-navbar'>
      <section className='admin-navbar-home'>
        <div>
          <PiHouseLineLight className='admin-navbar-home-icon' />
        </div>
        <h3>Dashboard</h3>
      </section>
      <section>
        <input type='text' placeholder='Search here...' />
      </section>
      <section>
        <div className='navbar-profile'>
          <div>
            <AiOutlineBell className='navbar-notification' />
          </div>
          <Profile />
          <div>
            <SlArrowDown className='navbar-arrow' />
          </div>
        </div>
      </section>
    </article>
  )
}

export default Navbar
