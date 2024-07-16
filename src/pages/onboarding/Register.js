import React, { useState } from 'react'

import ToCreatePassword from '../../components/Registration/ToCreatePassword'
import Guardian from '../../components/Registration/Guardian'
import PersonalDetails from '../../components/Registration/PersonalDetails'
import SchoolDetails from '../../components/Registration/SchoolDetails'


const Register = () => {

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
    {step === 2 && (
      <SchoolDetails nextStep={nextStep} prevStep={prevStep} step={step} />
    )}
    {step === 3 && (
      <Guardian nextStep={nextStep} prevStep={prevStep} step={step} />
    )}
    {step > 3 && <ToCreatePassword prevStep={prevStep} nextStep={nextStep} />}
  </main>
  )
}

export default Register