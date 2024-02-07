import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Logo,
  SchoolIcon,
  SchoolIconWhite,
  StudentIcon,
  StudentIconWhite,
  TeacherIcon,
  TeachersIconWhite,
} from '../../components/images'
import Wrapper from '../../assets/css/onboarding/Onboarding.js'

function SelectPreference() {
  const [selectedPreference, setSelectedPreference] = useState(null)

  const handlePreferenceClick = (preference) => {
    setSelectedPreference(preference)
  }

  return (
    <Wrapper>
      {' '}
      <main className='pref-container'>
        <section className='pref-headings'>
          <div className='pref-logo logo-sm'>
            <Logo />
          </div>
          <h2>Choose Your Preference</h2>
          <p>
            It will help us, to give you a better experience on our platform.
          </p>
        </section>
        <section className='pref-select'>
          <div
            onClick={() => handlePreferenceClick('administrator')}
            className={
              selectedPreference === 'administrator'
                ? 'select-active'
                : ' select-deactive'
            }
          >
            <div className=''>
              <div>
                <div
                  className={
                    selectedPreference === 'administrator'
                      ? 'pref-icon-active'
                      : 'pref-icon'
                  }
                >
                  {selectedPreference === 'administrator' ? (
                    <SchoolIconWhite />
                  ) : (
                    <SchoolIcon />
                  )}
                </div>
                <h3>Administrator</h3>
              </div>

              <div
                className={
                  selectedPreference === 'administrator'
                    ? 'circle-icon-active'
                    : 'circle-icon'
                }
              ></div>
            </div>
          </div>
          <div
            onClick={() => handlePreferenceClick('teacher')}
            className={
              selectedPreference === 'teacher'
                ? 'select-active'
                : 'select-deactive'
            }
          >
            <div>
              <div>
                <div
                  className={
                    selectedPreference === 'teacher'
                      ? 'pref-icon-active'
                      : 'pref-icon'
                  }
                >
                  {selectedPreference === 'teacher' ? (
                    <TeachersIconWhite />
                  ) : (
                    <TeacherIcon />
                  )}
                </div>
                <h3>Teacher</h3>
              </div>

              <div
                className={
                  selectedPreference === 'teacher'
                    ? 'circle-icon-active'
                    : 'circle-icon'
                }
              ></div>
            </div>
          </div>
          <div
            onClick={() => handlePreferenceClick('student')}
            className={
              selectedPreference === 'student'
                ? 'select-active'
                : 'select-deactive'
            }
          >
            <div>
              <div>
                <div
                  className={
                    selectedPreference === 'student'
                      ? 'pref-icon-active'
                      : 'pref-icon'
                  }
                >
                  {selectedPreference === 'student' ? (
                    <StudentIconWhite />
                  ) : (
                    <StudentIcon />
                  )}
                </div>
                <h3>Student/Parent</h3>
              </div>

              <div
                className={
                  selectedPreference === 'student'
                    ? 'circle-icon-active'
                    : 'circle-icon'
                }
              ></div>
            </div>
          </div>
        </section>

        <div>
          <Link
            to={'/register'}
            className={selectedPreference ? 'btn-blue-active' : 'btn-gray'}
          >
            Continue
          </Link>
        </div>
      </main>
    </Wrapper>
  )
}

export default SelectPreference
