import { useState } from 'react'
import CreatePassword from '../../components/Registration/CreatePassword'
import PersonalDetails from '../../components/Registration/PersonalDetails'
import SchoolDetails from '../../components/Registration/SchoolDetails'
import Gaurdian from '../../components/Registration/Gaurdian'

function Register() {
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
        <Gaurdian nextStep={nextStep} prevStep={prevStep} step={step} />
      )}
      {step > 3 && <CreatePassword prevStep={prevStep} nextStep={nextStep} />}
    </main>
  )
}

export default Register
