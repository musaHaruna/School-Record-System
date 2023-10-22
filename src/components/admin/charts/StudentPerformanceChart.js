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
  const [selectedYear, setSelectedYear] = useState('Yearly')

  const handleChangeClass = (event) => {
    setSelectedClass(event.target.value)
  }
  const handleChangeYear = (event) => {
    setSelectedYear(event.target.value)
  }

  return (
    <section>
      <div className='chart student-growth-chart'>
        <div>
          <h2>Students performance</h2>
          <p>Last update: {new Date().toDateString()}</p>
        </div>
        <div className='inner-flex'>
          <select value={selectedClass} onChange={handleChangeClass}>
            <option value='All'>All class</option>
            <option value='Primary 1'>Primary 1</option>
            <option value='Primary 2'>Primary 2</option>
            <option value='Primary 3'>Primary 3</option>
            <option value='Primary 4'>Primary 4</option>
            <option value='Primary 5'>Primary 5</option>
          </select>
          <select value={selectedYear} onChange={handleChangeYear}>
            <option value='Yealy'>Yearly</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
          </select>
        </div>
      </div>
      <div className='line-chart-margin'>
        <LineChart width={450} height={270} data={data}>
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
    </section>
  )
}

export default StudentPerformanceChart
