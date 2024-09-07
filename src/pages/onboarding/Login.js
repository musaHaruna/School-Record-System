import React, { useState } from 'react'

import PersonalDetails from '../../components/Registration/PersonalDetails'


const Login = () => {

    const [step, setStep] = useState(1)

    const nextStep = () => {
      setStep(step + 1)
    }
  
    const prevStep = () => {
      setStep(step - 1)
    }


  return (
    <main className='register-form'>
    {step === 1 && <PersonalDetails nextStep={nextStep} step={step} />}
  </main>
  )
}

export default Login