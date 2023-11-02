'use client'
import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { AiOutlineDown } from "react-icons/ai";
import { FiFilter, FiPlayCircle } from "react-icons/fi";
import { BsFillCalendarMinusFill } from "react-icons/bs";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import Filter from '@/components/student/filter';
import Confirmation from '@/components/student/confirmation';


const page = () => {

    const [filter, setFilter] = useState(false);
    const [confirmation, setConfirmation] = useState(false)

    return (
        <>
            <div>
                <div className='w-full flex items-center justify-center pt-6 bg-[#f8f8f8]'><h1 className='text-[3vmax]'>Which you want</h1></div>
                <div className='md:flex bg-[#f8f8f8] justify-center gap-[8vmax] py-[5vmax]'>
                    <div className='hidden md:block md:h-[30vmax] bg-white pt-6'>
                        <div className='flex gap-2 items-center w-full justify-center'><FiFilter /><h1>Filter</h1></div>
                        <Filter/>
                    </div>
                    <div className='md:hidden'>
                        <div className='flex justify-between p-10'>
                            <div className='flex gap-2 items-center'><FiFilter /> <h1>Filter</h1></div>
                            {filter ? <RxCross1 onClick={(() => setFilter(false))} /> : <AiOutlineDown onClick={(() => setFilter(true))} />}
                        </div>
                        <div className='w-full flex items-center justify-center'>{filter ? <Filter /> : ""}</div>
                    </div>
                    <div className='w-full md:w-6/12 flex flex-col h-full md:h-[60vmax] gap-4 items-center overflow-x-auto no-scrollbar'>
                        <div className='w-4/5 md:h-fit md:w-full p-8 border rounded-lg bg-white'>
                            <div className='flex items-center justify-between mb-2'>
                                <h1 className='text-2xl'>Job Role</h1>
                                <img className='h-8' src="https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260" alt="" />
                            </div>
                            <h1 className='1.5xl'>company name</h1>
                            <div className='mt-4'>
                                Location / type
                            </div>
                            <div className='flex gap-12 flex-wrap border-b py-4'>
                                <div className='flex gap-2'>
                                    <div className='mt-1'><FiPlayCircle /></div>
                                    <div>
                                        <h3>Start Date</h3>
                                        <h3>20/20/20</h3>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <div className='mt-1'><BsFillCalendarMinusFill /></div>
                                    <div>
                                        <h3>Duration</h3>
                                        <h3>6 months</h3>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <div className='mt-1'><HiOutlineCurrencyRupee /></div>
                                    <div>
                                        <h3>Stippend</h3>
                                        <h3>6000</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mt-4 flex items-center justify-end'>
                                <button onClick={() => setConfirmation(true)} className='px-4 rounded-md py-2 border border-cyan-400'>View Details</button>
                            </div>
                        </div>
                        <div className='w-4/5 md:h-fit md:w-full p-8 border rounded-lg bg-white'>
                            <div className='flex items-center justify-between mb-2'>
                                <h1 className='text-2xl'>Job Role</h1>
                                <img className='h-8' src="https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260" alt="" />
                            </div>
                            <h1 className='1.5xl'>company name</h1>
                            <div className='mt-4'>
                                Location / type
                            </div>
                            <div className='flex gap-12 flex-wrap border-b py-4'>
                                <div className='flex gap-2'>
                                    <div className='mt-1'><FiPlayCircle /></div>
                                    <div>
                                        <h3>Start Date</h3>
                                        <h3>20/20/20</h3>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <div className='mt-1'><BsFillCalendarMinusFill /></div>
                                    <div>
                                        <h3>Duration</h3>
                                        <h3>6 months</h3>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <div className='mt-1'><HiOutlineCurrencyRupee /></div>
                                    <div>
                                        <h3>Stippend</h3>
                                        <h3>6000</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mt-4 flex items-center justify-end'>
                                <button onClick={() => setConfirmation(true)} className='px-4 rounded-md py-2 border border-cyan-400'>View Details</button>
                            </div>
                        </div>
                        <div className='w-4/5 md:h-fit md:w-full p-8 border rounded-lg bg-white'>
                            <div className='flex items-center justify-between mb-2'>
                                <h1 className='text-2xl'>Job Role</h1>
                                <img className='h-8' src="https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260" alt="" />
                            </div>
                            <h1 className='1.5xl'>company name</h1>
                            <div className='mt-4'>
                                Location / type
                            </div>
                            <div className='flex gap-12 flex-wrap border-b py-4'>
                                <div className='flex gap-2'>
                                    <div className='mt-1'><FiPlayCircle /></div>
                                    <div>
                                        <h3>Start Date</h3>
                                        <h3>20/20/20</h3>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <div className='mt-1'><BsFillCalendarMinusFill /></div>
                                    <div>
                                        <h3>Duration</h3>
                                        <h3>6 months</h3>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <div className='mt-1'><HiOutlineCurrencyRupee /></div>
                                    <div>
                                        <h3>Stippend</h3>
                                        <h3>6000</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mt-4 flex items-center justify-end'>
                                <button onClick={() => setConfirmation(true)} className='px-4 rounded-md py-2 border border-cyan-400'>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {confirmation ? <Confirmation setConfirmation={setConfirmation} /> : ""}
        </>
    )
}

export default page