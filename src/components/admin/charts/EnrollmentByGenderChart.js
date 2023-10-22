import React, { useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
const EnrollmentByGenderChart = ({ data }) => {
  const [selectedClass, setSelectedClass] = useState('All')
  const COLORS = ['#4A3AFF', '#B062FF']

  const handleChangeClass = (event) => {
    setSelectedClass(event.target.value)
  }

  return (
    <div className='pie-chart-container'>
      <PieChart width={400} height={250}>
        <Pie
          data={data}
          dataKey='value'
          nameKey='name'
          cx='50%'
          cy='50%'
          outerRadius={80}
          fill='#8884d8'
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(2)}%`
          }
        >
          {data.map((item) => (
            <Cell key={item.name} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )
}

export default EnrollmentByGenderChart
