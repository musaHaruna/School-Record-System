import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <div>
      <nav></nav>
      <div>
        {/* info */}
        <div>
          <h1>School Recod System</h1>
          <p>
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <Link to='/select-preference'>Apply</Link>
        </div>
      </div>
    </div>
  )
}

export default Landing
