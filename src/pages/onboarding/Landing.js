import { Link } from 'react-router-dom'
import { Logo, SchoolBg, SchoolImgIpad } from '../../components/images'
import '../../assets/css/onboarding/onboarding.css'

/* eslint-disable */
const Landing = () => {
  return (
    <main>
      <article className='hero-container hero-flex'>
        <section className='hero-content'>
          <div className='hero-logo'>
            <Logo />
          </div>
          <h1 className='hero-heading'>
            <span className='welcome'>Welcome to</span> <br />
            Perculiar Treasure <br />
            Nursery an Primary School
          </h1>
          <p>
            It will help us, to give you a better experience on our platform.
          </p>
          <div className='landing-btns-ipad'>
            <Link className='btn-blue' to='/select-preference'>
              Let's get started
            </Link>
          </div>
          <div className='landing-btns'>
            <Link className='btn-blue' to='/select-preference'>
              Apply
            </Link>
            <Link className='btn-blue-border' to='/login'>
              Returning Admin/staff Login
            </Link>
          </div>
          <p className='policy-links'>
            I have read and agree to the <a href='#'>Terms of Use </a>as well as
            <a href='#'>Privacy Policy</a>
          </p>
          <p className='policy-links-show'>
            I have read and agree to the <a href='#'>Terms of Use </a> as well
            as <a href='#'>Privacy Policy</a>
          </p>
        </section>
        <section className='hero-img'>
          <SchoolBg />
        </section>
        <section className='hero-img-ipad'>
          <SchoolImgIpad />
        </section>
      </article>
    </main>
  )
}

export default Landing
