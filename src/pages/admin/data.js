import { PiStudent } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { GoBook } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";

export const adminSummary = [
  {
    id: 1,
    icon: <GiTeacher />,
    name: "Teachers",
    number: 500,
    dots: <BsThreeDots />,
  },
  {
    id: 2,
    icon: <PiStudent />,
    name: "Students",
    number: 2000,
    dots: <BsThreeDots />,
  },
  {
    id: 3,
    icon: <GoBook />,
    name: "Subjects",
    number: 500,
    dots: <BsThreeDots />,
  },
  {
    id: 4,
    icon: <RiTeamLine />,
    name: "Classes",
    number: 9,
    dots: <BsThreeDots />,
  },
];

export const studentGrowthChartData = [
  {
    name: "JAN",
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    name: "FEB",
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    name: "MAR",
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    name: "APR",
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    name: "MAY",
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    name: "JUN",
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    name: "JUL",
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    name: "AUG",
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    name: "SEP",
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    name: "OCT",
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    name: "NOV",
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    name: "DEC",
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
];

export const enrollmentByAgeData = [
  { label: 0, value: 200 },
  { label: 9, value: 500 },
  { label: 15, value: 600 },
  { label: 18, value: 700 },
  { label: 21, value: 1000 },
];

export const performanceData = [
  {
    year: 2012,
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    year: 2013,
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    year: 2014,
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    year: 2015,
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    year: 2016,
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    year: 2017,
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    year: 2022,
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
  {
    year: 2023,
    boys: Math.floor(Math.random() * 100),
    girls: Math.floor(Math.random() * 100),
  },
];

export const genderData = [
  { name: "Boys", value: 50 },
  { name: "Girls", value: 50 },
];
export const teacherToStudentCharts = [
  { name: "Teachers", value: 25 },
  { name: "Student", value: 75 },
];

export const studentRows = [
  {
    id: 1,
    firstName: "Emmanuel",
    middleName: "Iseoluwa",
    otherNames: "Abiodun",
    gender: "Male",
    age: 14,
    studentClass: "SS1",
    parentsNumber: "+2349025766940",
  },
  {
    id: 2,
    firstName: "James",
    middleName: "David",
    otherNames: "Olaoluwa",
    gender: "Male",
    age: 12,
    studentClass: "JSS3",
    parentsNumber: "+2349025766940",
  },
  {
    id: 3,
    firstName: "Abigirl",
    middleName: "Dolapo",
    otherNames: "Abiodun",
    gender: "female",
    age: 13,
    studentClass: "SS1",
    parentsNumber: "+2349025766940",
  },
  {
    id: 4,
    firstName: "Emmanuel",
    middleName: "Iseoluwa",
    otherNames: "Abiodun",
    gender: "Male",
    age: 14,
    studentClass: "SS1",
    parentsNumber: "+2349025766940",
  },
  {
    id: 4,
    firstName: "Emmanuel",
    middleName: "Iseoluwa",
    otherNames: "Abiodun",
    gender: "Male",
    age: 14,
    studentClass: "SS1",
    parentsNumber: "+2349025766940",
  },
  {
    id: 5,
    firstName: "Emmanuel",
    middleName: "Iseoluwa",
    otherNames: "Abiodun",
    gender: "Male",
    age: 14,
    studentClass: "SS1",
    parentsNumber: "+2349025766940",
  },
  {
    id: 6,
    firstName: "Emmanuel",
    middleName: "Iseoluwa",
    otherNames: "Abiodun",
    gender: "Male",
    age: 14,
    studentClass: "SS1",
    parentsNumber: "+2349025766940",
  },
];

export const classOptions = [
  {
    id: 1,
    class: "JSS1",
  },
  {
    id: 2,
    class: "JSS2",
  },
  {
    id: 3,
    class: "JSS3",
  },
  {
    id: 4,
    class: "SS1",
  },
  {
    id: 5,
    class: "SS3",
  },
  {
    id: 6,
    class: "SS3",
  },
];

export const subjectsRow = [
  {
    id: 1,
    subjectName: "Physcis",
    classTitle: "SS2",
    addedBy: "Mrs Abigirl",
    teachers: [
      {
        id: 1,
        name: "Mr Amao",
        gender: "male",
      },
    ],
  },
  {
    id: 2,
    subjectName: "English",
    classTitle: "SS1",
    addedBy: "Mr Ade",
    teachers: [
      {
        id: 1,
        name: "Mr Ade",
        gender: "male",
      },
    ],
  },
  {
    id: 3,
    subjectName: "Civic Education",
    classTitle: "SS3",
    addedBy: "Mr Abiodun",
    teachers: [
      {
        id: 1,
        name: "Mrs Joke",
        gender: "Female",
      },
    ],
  },
  {
    id: 4,
    subjectName: "Mathematics",
    classTitle: "SS2",
    addedBy: "Mr Ade",
    teachers: [
      {
        id: 1,
        name: "Mr John",
        gender: "Male",
      },
      {
        id: 2,
        name: "Mr John",
        gender: "Male",
      },
      {
        id: 3,
        name: "Mrs Funmi",
        gender: "Female",
      },
    ],
  },
  {
    id: 5,
    subjectName: "Accounting",
    classTitle: "SS2",
    addedBy: "Mr Adam",
    teachers: [
      {
        id: 1,
        name: "Mr David",
        gender: "male",
      },
    ],
  },
];
