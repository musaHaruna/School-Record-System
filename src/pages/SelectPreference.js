import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SelectPreference() {
  const [selectedPreference, setSelectedPreference] = useState(null)

  const handlePreferenceClick = (preference) => {
    setSelectedPreference(preference)
  }

  const linkStyles = {
    pointerEvents: selectedPreference ? 'auto' : 'none', // Disable pointer events if no preference is selected
    color: selectedPreference ? '#000' : '#999', // Change color if no preference is selected
  }

  return (
    <div>
      <h1>Choose Your Preference</h1>
      <button
        onClick={() => handlePreferenceClick('Administrator')}
        style={{
          border:
            selectedPreference === 'Administrator'
              ? '2px solid blue'
              : '2px solid black',
        }}
      >
        Administrator
      </button>
      <button
        onClick={() => handlePreferenceClick('Teacher')}
        style={{
          border:
            selectedPreference === 'Teacher'
              ? '2px solid blue'
              : '2px solid black',
        }}
      >
        Teacher
      </button>
      <button
        onClick={() => handlePreferenceClick('Student')}
        style={{
          border:
            selectedPreference === 'Student'
              ? '2px solid blue'
              : '2px solid black',
        }}
      >
        Student
      </button>
      <div>
        <Link to={'/register'} style={linkStyles}>
          Continue
        </Link>
      </div>
    </div>
  )
}

export default SelectPreference
