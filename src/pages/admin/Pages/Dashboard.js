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
} from '../data'

const Dashboard = () => {
  return (
    <article className='admin-dashboard'>
      <section>
        <h1>Welcome Admin!</h1>
      </section>

      <section>
        {adminSummary.map((item) => (
          <div className='listItem' key={item.id}>
            <div className='user'>
              <div>{item.icon}</div>
              <div>{item.name}</div>
              <div>{item.dots}</div>
            </div>
            <div>{item.number}</div>
          </div>
        ))}
      </section>
      <section className='dashboard-charts'>
        <section>
          <div className='chart-container'>
            <StudentGrowthChart data={studentGrowthChartData} />
          </div>
          <div>
            <StudentPerformanceChart data={performanceData} />
          </div>
        </section>
        <section>
          <EnrollmentByAgeChart data={studentGrowthChartData} />
          <EnrollmentByGenderChart data={genderData} />
        </section>
      </section>
    </article>
  )
}

export default Dashboard
