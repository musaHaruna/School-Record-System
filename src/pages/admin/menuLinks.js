import { PiHouseLineLight } from 'react-icons/pi'
import { GiTeacher } from 'react-icons/gi'
import { RiTeamLine } from 'react-icons/ri'
import { LuGraduationCap } from 'react-icons/lu'
import { GoBook } from 'react-icons/go'
import { FiSettings } from 'react-icons/fi'
import { CiLogout } from 'react-icons/ci'

export const menuLinks = [
  {
    id: 1,
    title: 'Dashboard',
    url: 'dashboard',
    icon: <PiHouseLineLight />,
  },
  {
    id: 2,
    title: 'Teachers',
    url: 'teachers',
    icon: <GiTeacher />,
  },

  {
    id: 4,
    title: 'Academic Sessions',
    url: 'academic-sessions',
    icon: <LuGraduationCap />,
  },
  {
    id: 5,
    title: 'Subjects',
    url: 'subjects',
    icon: <GoBook />,
  },
  {
    id: 6,
    title: 'Classes',
    url: 'classes',
    icon: <RiTeamLine />,
  },

  {
    id: 3,
    title: 'Students',
    url: 'students',
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
