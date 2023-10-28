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
    url: '/admin',
    icon: <PiHouseLineLight />,
  },
  {
    id: 2,
    title: 'Teachers',
    url: 'all-teachers',
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
export const teachersLink = [
  {
    id: 1,
    title: 'Add Teachers',
    icon: <IoIosArrowForward />,
    url: 'add-teacher',
  },

  {
    id: 2,
    title: 'All Teachers',
    icon: <IoIosArrowForward />,
    url: 'all-teachers',
  },
  {
    id: 3,
    title: 'Teachers details',
    icon: <IoIosArrowForward />,
    url: 'teachers-detail',
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
