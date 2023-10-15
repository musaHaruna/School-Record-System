import { useState } from 'react'
import CreatePassword from '../../components/registration/CreatePassword'
import PersonalDetails from '../../components/registration/PersonalDetails'
import SchoolDetails from '../../components/registration/SchoolDetails'
import Gaurdian from '../../components/registration/Gaurdian'

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
      {step > 3 && <CreatePassword prevStep={prevStep} nextStep={nextStep}/>}
    </main>
  )
}

export default Register
