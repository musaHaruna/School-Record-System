import React, { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts'

const StudentPerformanceChart = ({ data }) => {
  const [selectedClass, setSelectedClass] = useState('All')

  const handleChangeClass = (event) => {
    setSelectedClass(event.target.value)
  }

  return (
    <div>
      <h2>Student's Performance</h2>
      <p>Last update: {new Date().toDateString()}</p>
      <select value={selectedClass} onChange={handleChangeClass}>
        <option value='All'>All class</option>
        <option value='Primary 1'>Primary 1</option>
        <option value='Primary 2'>Primary 2</option>
        <option value='Primary 3'>Primary 3</option>
        <option value='Primary 4'>Primary 4</option>
        <option value='Primary 5'>Primary 5</option>
      </select>
      <LineChart width={450} height={250} data={data}>
        <YAxis
          type='number'
          domain={[0, 100]}
          axisLine={{ stroke: 'gray', strokeWidth: 2 }}
          tick={{ fontSize: 10 }}
        />
        <XAxis
          dataKey='year'
          type='category'
          interval={0}
          axisLine={{ stroke: 'gray', strokeWidth: 2 }}
          tick={{ fontSize: 10 }}
        />
        <Tooltip isAnimationActive={false} />
        <Legend payload={[]} />
        <CartesianGrid
          strokeDasharray='10 10' // Set the strokeDasharray for dashed lines
          vertical={false} // Disable vertical grid lines
        />
        <Line
          type='monotone'
          dataKey='boys'
          stroke='#4A3AFF'
          dot={false}
          strokeWidth={2.5}
        />
        <Line
          type='monotone'
          dataKey='girls'
          stroke='#B062FF'
          dot={false}
          strokeWidth={2.5}
        />
      </LineChart>
    </div>
  )
}

export default StudentPerformanceChart
