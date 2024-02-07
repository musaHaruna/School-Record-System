import { PiHouseLineLight } from 'react-icons/pi'
import { GiTeacher } from 'react-icons/gi'
import { RiTeamLine } from 'react-icons/ri'
import { LuGraduationCap } from 'react-icons/lu'
import { GoBook } from 'react-icons/go'
import { FiSettings } from 'react-icons/fi'
import { CiLogout } from 'react-icons/ci'
import { IoIosArrowForward } from 'react-icons/io'

export const menuLinks = [
  {
    id: 1,
    title: 'Dashboard',
    url: '/teacher',
    icon: <PiHouseLineLight />,
  },
  {
    id: 2,
    title: 'Profile',
    url: 'profile',
    icon: <GiTeacher />,
  },

  {
    id: 3,
    title: 'Subjects',
    url: 'subjects',
    icon: <LuGraduationCap />,
  },
]

export const otherLinks = [
  {
    id: 7,
    title: 'Settings',
    icon: <FiSettings />,
  },

  {
    id: 8,
    title: 'Logout',
    icon: <CiLogout />,
  },
]
