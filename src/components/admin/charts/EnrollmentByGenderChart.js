import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { GoDotFill } from 'react-icons/go'

const EnrollmentByGenderChart = ({ data }) => {
  return (
    <section>
      <div className='chart'>
        <div>
          <h2>Enrollement by Gender</h2>
        </div>

        <div className='students-teachers-ratio'>
          <div className='labels'>
            <div>
              <GoDotFill style={{ color: '#4A3AFF', fontSize: 'px' }} />
              <h6>Boys</h6>
            </div>
            <div>
              <GoDotFill style={{ color: '#B062FF', fontSize: 'px' }} />
              <h6>Girls</h6>
            </div>
          </div>
          <div>
            <ResponsiveContainer width='99%' height={160}>
              <PieChart width={400} height={250}>
                <Pie
                  data={data}
                  dataKey='value'
                  nameKey='name'
                  cx='50%'
                  cy='50%'
                  innerRadius={40} // Set the inner radius to create a doughnut
                  outerRadius={80}
                  fill='#8884d8'
                  label={{ fontSize: 12 }}
                >
                  <Cell name='Boys' fill='#4A3AFF' />
                  <Cell name='Girls' fill='#B062FF' />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnrollmentByGenderChart
