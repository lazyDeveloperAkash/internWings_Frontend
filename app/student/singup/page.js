'use client'
import React, { useEffect, useState } from 'react'
import { asyncCurrentStudent, asyncSingupStudent } from '@/store/Actions/studentActions'
import { useRouter } from 'next/navigation'
import Login from '@/components/student/login'
import Singup from '@/components/student/singup'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {

  const dispatch = useDispatch();

  const [login, setLogin] = useState(false);


  const router = useRouter();
  const { isAuthenticated } = useSelector(state => state.studentReducer);


  return (
    <div className="flex items-center justify-center flex-col bg-[url('https://internshala.com/static/images/registration/student_new/background.png')] bg-cover">
      <div className="flex flex-col items-center justify-center m-5">
        <h1 className="text-[2.5vmax] font-[700]">Sign-up and apply for free</h1>
        <div className="flex items-end justify-end w-[30%]">
          <img className="w-[15.5vmax]" src="https://internshala.com/static/images/registration/student_new/underline_d.svg" alt="" />
        </div>
        <h1 className="text-[1.5vmax]">1,50,000+ companies hiring on our platform</h1>
      </div>
      <Singup setLogin={setLogin} />
      {login ? <Login setLogin={setLogin} /> : ""}
    </div>
  )
}

export default page