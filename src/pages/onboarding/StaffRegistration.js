import React, { useState } from 'react'
import {
    Logo,

  } from '../../components/images'
import { Button } from '../../components/ui/button'
import { Link } from 'react-router-dom'

const StaffRegistration = () => {

    const [gender, setGender]=useState("")


  return (
    <div className='w-full sm:h-[100vh]  min-h-screen  h-auto flex flex-col sm:flex-row bg-white '>
        <div className=' hidden sm:flex flex-1 h-32 lg:h-full'>
            <div className="relative flex h-32 items-end bg-gray-900 lg:h-full ">
            <img
            alt=""
            src="/teacherImg.webp"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            />

        <div className="hidden lg:relative lg:block lg:p-12">
            <div className=' logo-sm'>
                    <Logo />
            </div>

        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Welcome To Pecular Treasure 
        </h2>

        <p className="mt-4 leading-relaxed text-white/90">
         We welcome you to Pecular Treasure Nusary & Primary School. Register as an Admin today to proceed to your dashboard
            </p>
         </div>
    
            </div>
        </div>

        {/* form side */}
        <div className='flex-1 flex justify-center h-screen items-center overflow-auto'>
            <div className='w-full py-10 sm:py-18 px-6 sm:px-12 flex flex-col justify-center items-center gap-6'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <div className=' logo-sm'>
                        <Logo />
                     </div>
                    <p className='text-[16px] '>Register as a Staff into Perculiar Treasure School </p>
                </div>

                <form className='w-full flex flex-col gap-4 mt-4 sm:max-w-[600px] justify-start p-2 sm:p-6  '>
                    
                    {/* user name */}
                    <div className='flex flex-col sm:flex-row items-center gap-6 justify-start'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor='name' className='text-sm'>Name</label>
                            <input type='text' id='name' 
                              name='name'
                              className='px-4 py-2 outline-[#988fff] border border-gray-300 rounded-lg' />
                        </div>

                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor='phoneNumber'  className='text-sm'>Phone Number</label>
                            <input type='text' id='phoneNumber' 
                              name='phoneNumber'
                              placeholder='+234'
                              className='px-4 py-2 outline-[#988fff] border border-gray-300 rounded-lg' />
                        </div>

                    </div>
                    {/* email */}

                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor='email'  className='text-sm'>Email</label>
                            <input type='email' id='lastName' 
                              name='Email'
                              placeholder='user@email.com'
                              className='px-4 py-2 outline-[#988fff] border border-gray-300 rounded-lg' />
                    </div>

                    {/* password */}
                    <div className='flex items-center gap-6 flex-col sm:flex-row'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor='password' className='text-sm' >Password</label>
                            <input type='password' id='password' 
                              name='password'
                              className='px-4 py-2 outline-[#988fff] border border-gray-300 rounded-lg' />
                        </div>

                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor='confirmPassword'  className='text-sm'>Confirm Password</label>
                            <input type='password' id='confirmPassword' 
                              name='confirmPassword'
                              className='px-4 py-2 outline-[#988fff] border border-gray-300 rounded-lg' />
                        </div>

                    </div>

                    {/* gender & D0B */}

                <div className='flex items-center gap-6 flex-col sm:flex-row'>

                    <div className='flex flex-col gap-2 mt-2 w-[300px] sm:w-[400px]'>
                        <label htmlFor='gender'>Gender</label>
                        <div className='flex items-center gap-4'>
                            {/* <label>Gender</label> */}
                            <label className='flex items-center gap-2'>
                                <input
                                id='gender'
                                type='radio'
                                value='male'
                                checked={gender === 'male'}
                                onChange={() => setGender('male')}
                            />
                                Male
                            </label>

                            <label className='flex items-center gap-2'>
                                <input
                                id='gender'
                                type='radio'
                                value='female'
                                checked={gender === 'female'}
                                onChange={() => setGender('female')}
                                />
                                    Female
                            </label>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor='dateOfBirth'  className='text-sm'>Date Of Birth</label>
                            <input type='text' id='dateOfBirth' 
                              name='dateOfBirth'
                              className='px-4 py-2 outline-[#988fff] border border-gray-300 rounded-lg' />
                        </div>

                </div>


                {/* qualifications */}
                <div>
                    <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor='qualifications'  className='text-sm'>Qualifications</label>
                            <textarea type='text' id='qualifications' 
                              name='qualifications'
                              className='px-4 py-2 outline-[#988fff] border border-gray-300 rounded-lg' />
                        </div>
                </div>



                    <Link to="/login" className='flex flex-col items-center justify-center w-full gap-4'>
                    <Button className="w-full bg-[#4a3aff] hover:bg-[#4e3ffa] "> Register</Button>
                    <p className='text-black text-sm'>Already Registered? <span className='text-gray-600 cursor-pointer underline'>Login to your dashboard </span></p>
                    </Link>

                </form>
            </div>
        </div>
    </div>
  )
}

export default StaffRegistration