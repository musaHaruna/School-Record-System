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
const Dashboard = () => {
  return (
    <article className='admin-dashboard'>
      <section className='admin-dashboard-heading'>
        <h1>Welcome Admin!</h1>
        <p>
          <span>Home</span>/ <span className='gray'>Admin</span>
        </p>
      </section>

      <section className='dashboard-summary'>
        {adminSummary.map((item) => (
          <div className='card' key={item.id}>
            <div className='user'>
              <div style={{ color: getColorByItemId(item.id) }}>
                {item.icon}
              </div>
              <div className='name'>{item.name}</div>
              <div>{item.dots}</div>
            </div>
            <div className='value' style={{ color: getColorByItemId(item.id) }}>
              {item.number}
            </div>
          </div>
        ))}
      </section>
      <section className='dashboard-charts'>
        <section className='dashboard-charts-left'>
          <div className='chart-container'>
            <StudentGrowthChart
              className='chart-container'
              data={studentGrowthChartData}
            />
          </div>
          <div className='chart-container'>
            <StudentPerformanceChart data={performanceData} />
          </div>
        </section>
        <section className='dashboard-charts-right'>
          <div className='chart-container'>
            <TeachersToStudentRatioChart data={teacherToStudentCharts} />
          </div>
          <div className='chart-container'>
            <EnrollmentByGenderChart data={genderData} />
          </div>
          <div className='chart-container'>
            <EnrollmentByAgeChart data={enrollmentByAgeData} />
          </div>
        </section>
      </section>
    </article>
  )
}

export default Dashboard
