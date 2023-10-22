import React, { useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const StudentGrowthChart = ({ data }) => {
  const [selectedClass, setSelectedClass] = useState('All')

  const handleChangeClass = (event) => {
    setSelectedClass(event.target.value)
  }

  return (
    <div>
      <h2>Student's Growth</h2>
      <p>Last update: {new Date().toDateString()}</p>
      <select value={selectedClass} onChange={handleChangeClass}>
        <option value='All'>All class</option>
        <option value='Primary 1'>Primary 1</option>
        <option value='Primary 2'>Primary 2</option>
        <option value='Primary 3'>Primary 3</option>
        <option value='Primary 4'>Primary 4</option>
        <option value='Primary 5'>Primary 5</option>
      </select>

      <BarChart width={450} height={250} data={data}>
        <YAxis
          type='number'
          domain={[0, 100]}
          axisLine={{ stroke: 'gray', strokeWidth: 2 }}
          tick={{ fontSize: 10 }}
        />
        <XAxis
          dataKey='name'
          type='category'
          interval={0}
          axisLine={{ stroke: 'gray', strokeWidth: 2 }}
          tick={{ fontSize: 10 }}
        />
        <Tooltip isAnimationActive={false} />
        <Legend payload={[]} />
        <Bar
          dataKey='boys'
          fill='#4A3AFF'
          isAnimationActive={false}
          radius={[25, 25, 0, 0]}
        />
        <Bar
          dataKey='girls'
          fill='#B062FF'
          isAnimationActive={false}
          radius={[25, 25, 0, 0]}
        />
      </BarChart>
    </div>
  )
}

export default StudentGrowthChart
