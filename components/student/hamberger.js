import { asyncSingoutStudent } from '@/store/Actions/studentActions';
import Link from 'next/link';
import React from 'react'
import { useDispatch } from 'react-redux';

const Hamberger = (props) => {

    const { setHamberger } = props;
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(asyncSingoutStudent());
        setHamberger(false);
    }

    return (
        <>
            <div className='h-full w-full bg-[#0000001a] absolute top-0'>
                <div className='w-4/5 h-full p-12 bg-white'>
                    <img className='h-8' onClick={() => setHamberger(false)} src="https://islandfreshbermuda.com/wp-content/uploads/2021/10/black-x-png-7-png-image-black-x-png-1600_1600.png" alt="" />
                    <div className='flex items-center flex-col justify-between gap-8 mt-10'>
                        <Link onClick={() => setHamberger(false)} href='/student/auth'><h1 className="text-xl cursor-pointer">Home</h1></Link>
                        <Link onClick={() => setHamberger(false)} href='/student/auth/jobs'><h1 className="text-xl cursor-pointer">Jobs</h1></Link>
                        <Link onClick={() => setHamberger(false)} href='/student/auth/internships'><h1 className="text-xl cursor-pointer">Internships</h1></Link>
                        <h1 className="text-xl cursor-pointer" onClick={logoutHandler}>Logout</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hamberger