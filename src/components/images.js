import logo from '../assets/images/logo-icon.png'
import schoolimg from '../assets/images/school-img.png'
import schoolIcon from '../assets/images/school-icon.png'
import teacherIcon from '../assets/images/teacher-icon.png'
import studentIcon from '../assets/images/school-img.png'
import keyIcon from '../assets/images/key-icon.png'
import gaurdianIcon from '../assets/images/gaurdian-icon.png'
import heroOne from '../assets/images/hero-image-1.png'
import heroTwo from '../assets/images/hero-image-2.png'

const Logo = () => {
  return <img src={logo} alt='logo' />
}
const KeyIcon = () => {
  return <img src={keyIcon} alt='passcode' />
}
const GaurdianIcon = () => {
  return <img src={gaurdianIcon} alt='gaurdian' />
}
const HeroOne = () => {
  return <img src={heroOne} alt='hero' />
}
const HeroTwo = () => {
  return <img src={heroTwo} alt='hero' />
}
const SchoolBg = () => {
  return <img src={schoolimg} alt='logo' />
}
const TeacherIcon = () => {
  return <img src={teacherIcon} alt='teacher' />
}

const SchoolIcon = () => {
  return <img src={schoolIcon} alt='admin' />
}
const StudentIcon = () => {
  return <img src={studentIcon} alt='student' />
}

export { Logo, SchoolBg, TeacherIcon, StudentIcon, SchoolIcon, KeyIcon, GaurdianIcon, HeroOne, HeroTwo }
