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
    <main>
      <div>logo</div>
      <h1 style={{ display: step === 4 ? 'none' : '' }}>
        <span style={{ color: 'blue' }}>{step} </span>/3
      </h1>

      {step === 1 && <PersonalDetails nextStep={nextStep} />}
      {step === 2 && <SchoolDetails nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Gaurdian nextStep={nextStep} prevStep={prevStep} />}
      {step > 3 && <CreatePassword prevStep={prevStep} />}
    </main>
  )
}

export default Register
