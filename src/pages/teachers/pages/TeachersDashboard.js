import EnrollmentByAgeChart from '../../../components/admin/charts/EnrollmentByAgeChart'
import EnrollmentByGenderChart from '../../../components/admin/charts/EnrollmentByGenderChart'
import StudentGrowthChart from '../../../components/admin/charts/StudentGrowthChart'
import StudentPerformanceChart from '../../../components/admin/charts/StudentPerformanceChart'
import '../../../assets/css/admin/dashboard.css'
import {
  studentGrowthChartData,
  adminSummary,
  performanceData,
  genderData,
  enrollmentByAgeData,
  teacherToStudentCharts,
} from '../data'
import TeachersToStudentRatioChart from '../../../components/admin/charts/TeachersToStudentRatioChart'

function getColorByItemId(id) {
  switch (id) {
    case 1:
      return '#4A3AFF'
    case 2:
      return '#B062FF'
    case 3:
      return '#009E4D'
    case 4:
      return '#3AB8FF'
    default:
      return 'black' // Default color if the id doesn't match 1-4
  }
}
const TeachersDashboard = () => {
  return <article className='admin-dashboard'>Teacher dashboard</article>
}

export default TeachersDashboard
