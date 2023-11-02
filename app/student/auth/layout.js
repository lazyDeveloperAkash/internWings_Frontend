'use client'
import Hamberger from '@/components/student/hamberger';
import { asyncSingoutStudent } from '@/store/Actions/studentActions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'



const layout = ({ children }) => {

  const [hamberger, setHamberger] = useState(false);
  const router = useRouter();


  const profileHandler = () => {
    router.push("/student/auth/profile");
  }

  const logoutHandler = () => {
    dispatch(asyncSingoutStudent());
  }


  return (
    <>
      <nav>
        <div className="w-full border-b-2 h-20 px-[3vmax] flex items-center justify-between">
          <div className='flex items-center gap-3'>
            <img onClick={() => setHamberger(true)} className='h-8 md:hidden cursor-pointer' src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png" alt="" />
            <img className="h-10 md:h-16" src="https://ik.imagekit.io/xxqni4yfv/logo_.png?updatedAt=1697125026386" alt="" />
          </div>
          <div className="flex items-center gap-10">
            <div className='hidden md:block'>
              <div className=' items-center justify-between gap-10 flex'>
                <Link href="/student/auth"><h1 className="text-xl cursor-pointer">Home</h1></Link>
                <Link href="/student/auth/jobs"><h1 className="text-xl cursor-pointer">Jobs</h1></Link>
                <Link href="/student/auth/internships"><h1 className="text-xl cursor-pointer">Internships</h1></Link>
                <h1 className="text-xl cursor-pointer" onClick={logoutHandler}>Logout</h1>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-black cursor-pointer" onClick={profileHandler}></div>
          </div>
        </div>
      </nav>
      {hamberger ? <Hamberger setHamberger={setHamberger} /> : ""}
      {children}
    </>
  )
}

export default layout