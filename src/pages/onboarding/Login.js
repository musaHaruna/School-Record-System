import React, { useState } from 'react'
import { HeroOne, KeyIcon, Logo } from '../../components/images'
import '../../assets/css/otp.css'
import { AiFillCheckCircle } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'
import Wrapper from '../../assets/css/onboarding/Onboarding'
import { Link } from 'react-router-dom'

const Login = ({ prevStep, nextStep }) => {
  const [otp, setOtp] = useState(new Array(6).fill(''))
  const [borderColor, setBorderColor] = useState('#c5c6cc')
  const [isModal, setIsModal] = useState(false)
  // eslint-disable-next-line
  const [submitBtn, setSubmitBtn] = useState('btn-blue')

  const closeModal = () => {
    setIsModal(false)
  }

  const handleChange = (e, index) => {
    if (isNaN(e.target.value)) return false
    const updatedOTP = [...otp]
    updatedOTP[index] = e.target.value
    setOtp(updatedOTP)
    setBorderColor('#c5c6cc')

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus()
    }
  }

  let hasInputValues = otp.some((value) => value.trim() !== '')
  const handleSubmit = () => {
    setBorderColor('#27ae60')

    if (!hasInputValues) {
      alert('Fields cannot be empty')
      setBorderColor('#c5c6cc')
      setIsModal(false)
      setSubmitBtn('btn-blue')
      return
    }
    setIsModal(true)
    setSubmitBtn('btn-green')
  }

  return (
    <Wrapper>
      <article className='register-form register-form-flex'>
        <section className='register-content'>
          <div className='logo-sm create-passcode'>
            <Logo />
          </div>

          <div className='register-desc'>
            <div className='icon-reg'>
              <KeyIcon />
            </div>
            <div>
              <h3>Enter your details</h3>
              <p>Create a 6-digit PIN</p>
            </div>
          </div>

          <form className='register-details gaurdian-details'>
            <label>
              School ID
              <input type='text' required />
            </label>
          </form>

          <div>
            {isModal &&
              (otp.join('') ? (
                <div className='passcode-modal'>
                  <div>
                    <AiFillCheckCircle className='icon' />
                  </div>
                  <div>
                    <h5>Successfully created</h5>
                    <p>Your passcode has successfully been created</p>
                  </div>
                  <RxCross2 onClick={closeModal} />
                </div>
              ) : (
                <div className='passcode-modal error'>
                  <div>
                    <AiFillCheckCircle className='icon' />
                  </div>
                  <div>
                    <h6>Passcode not match</h6>
                    <p>Passcode Error, code kindly input again</p>
                  </div>
                  <RxCross2 onClick={closeModal} />
                </div>
              ))}
            <div>
              <h6>New Pin</h6>
              <div className='otp-area'>
                {otp.map((data, i) => {
                  return (
                    <input
                      key={i}
                      type='password'
                      maxLength={1}
                      value={data}
                      onChange={(e) => handleChange(e, i)}
                      style={{ borderColor }}
                    />
                  )
                })}
              </div>
            </div>
            <Link className='forgot' to={'/select-preference'}>
              Forgot pin?
            </Link>
          </div>
          <div className='register-navigate login'>
            <button
              className={
                borderColor === '#27ae60'
                  ? submitBtn
                  : borderColor === '#eb5757'
                  ? 'btn-red'
                  : 'btn-blue'
              }
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          <p className='new-here'>New here? <Link className='create' to={"select-preference"}>Create Account</Link></p>
        </section>
        <section className='register-hero'>
          <HeroOne />
        </section>
      </article>
    </Wrapper>
  )
}

export default Login
