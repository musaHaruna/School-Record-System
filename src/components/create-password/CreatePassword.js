import React, { useState } from 'react'
import './otp.css'

const CreatePassword = () => {
  const [otp1, setOtp1] = useState(new Array(6).fill(''))
  const [otp2, setOtp2] = useState(new Array(6).fill(''))
  const [isMatching, setIsMatching] = useState(null)

  const handleChange1 = (e, index) => {
    if (isNaN(e.target.value)) return false
    const updatedOTP1 = [...otp1]
    updatedOTP1[index] = e.target.value
    setOtp1(updatedOTP1)
    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus()
    }
  }

  const handleChange2 = (e, index) => {
    if (isNaN(e.target.value)) return false
    const updatedOTP2 = [...otp2]
    updatedOTP2[index] = e.target.value
    setOtp2(updatedOTP2)
    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus()
    }
  }

  const handleSubmit = () => {
    const areOTPMatching = otp1.join('') === otp2.join('')
    setIsMatching(areOTPMatching)
  }

  return (
    <div>
      <div className='otp-area'>
        {otp1.map((data, i) => {
          return (
            <input
              key={i}
              type='password'
              maxLength={1}
              value={data}
              onChange={(e) => handleChange1(e, i)}
              style={{ borderColor: isMatching ? 'green' : '' }}
            />
          )
        })}
      </div>
      <div className='otp-area'>
        {otp2.map((data, i) => {
          return (
            <input
              key={i}
              type='password'
              maxLength={1}
              value={data}
              onChange={(e) => handleChange2(e, i)}
              style={{ borderColor: isMatching ? 'green' : '' }}
            />
          )
        })}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default CreatePassword
