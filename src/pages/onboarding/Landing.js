import { Link } from 'react-router-dom'

/* eslint-disable */
const Landing = () => {
  return (
    <main>
      <div>logo</div>
      <h1>
        <span>Welcome to</span> <br />
        Perculiar Treasure <br />
        Nursery an Primary School
      </h1>
      <p>It will help us, to give you a better experience on our platform.</p>
      <div>
        <Link to='/select-preference'>Apply</Link>
        <Link to=''>Returning student/staff Login</Link>
      </div>
      <p>
        I have read and agree to the <a href='#'>Terms Of Use </a>as well as
        <a href='#'>Privacy policy</a>
      </p>
    </main>
  )
}

export default Landing
