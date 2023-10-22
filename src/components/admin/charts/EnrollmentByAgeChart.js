import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Label } from 'recharts'

const EnrollmentByAgeChart = ({ data }) => {
  const [selectedClass, setSelectedClass] = useState('All')

  const handleChangeClass = (event) => {
    setSelectedClass(event.target.value)
  }
  const reversedData = [...data].reverse()
  return (
    <section>
      <div className='chart'>
        <div>
          <h2>Enrollement by Age</h2>
          <p>Last update: {new Date().toDateString()}</p>
        </div>
      </div>
      <div>
        <BarChart
          width={400}
          height={250}
          data={reversedData}
          layout='vertical'
        >
          <XAxis type='number' tickCount={8}>
            <Label
              value='Students'
              position={{ x: 150, y: 30 }}
              style={{ textAnchor: 'middle', fontSize: '12px', color: 'black' }}
            />
          </XAxis>
          <YAxis type='category' dataKey='label' domain={[0, 'dataMax']}>
            <Label
              value='Ages'
              angle={-90}
              position='insideLeft'
              style={{ textAnchor: 'middle', fontSize: '12px', color: 'black' }}
            />
          </YAxis>
          <Tooltip />
          <Bar dataKey='value' fill='#4A3AFF' radius={[0, 25, 25, 0]} />
        </BarChart>
      </div>
    </section>
  )
}

export default EnrollmentByAgeChart
