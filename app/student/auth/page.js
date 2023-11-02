import React from 'react'

const page = () => {


    return (
        <>
            <div>
                <div className="w-full px-[3vmax] pt-[4vmax]">
                    <h1 className="text-[3vmax] font-bold">Hi, Akash! </h1>
                    <h1 className="text-[1.5vmax]">Let's help you land your dream career</h1>
                </div>
                <div className='w-full flex justify-between'>
                    <div className='w-[40vmax] h-80 ml-[7.5vmax] mt-12 hidden md:block'>
                        <h1 className='text-[2vmax]'>Your Resume</h1>
                        
                    </div>
                    <div className={`w-full md:h-[60vmax] bg-[#f0fbff] md:overflow-y-scroll no-scrollbar`}>
                        <div className='w-full bg-white'>
                            <h1 className='text-[2vmax] p-[3vmax]'>Trending on InternWings</h1>
                            <div className='w-full h-[26vh] flex gap-4 overflow-x-scroll'>
                                <div className='h-[25vmax] w-[35vmax] rounded-2xl bg-slate-500'></div>
                                <div className='h-[25vmax] w-[35vmax] rounded-2xl bg-slate-500'></div>
                                <div className='h-[25vmax] w-[35vmax] rounded-2xl bg-slate-500'></div>
                                {/* //work nhi kar rha ha */}
                            </div>
                        </div>
                        <div className='p-10'>
                            <h1 className='text-[2vmax]'>Jobs</h1>
                            <h1 className='text-[1.2vmax]'>as per your preferences</h1>
                            <div className='w-full flex items-center justify-between my-6 flex-wrap gap-6'>
                                <div className='w-[70vw] md:w-60 rounded-xl bg-red-300 h-[40vh]'></div>
                                <div className='w-[70vw] md:w-60 rounded-xl bg-red-300 h-[40vh]'></div>
                                <div className='w-[70vw] md:w-60 rounded-xl bg-red-300 h-[40vh]'></div>
                            </div>
                            <h1 className='text-[2.5vmax]'>Internships</h1>
                            <h1 className='text-[1.5vmax] mb-6'>which you want</h1>
                            <div className='w-full mb-6 flex items-center justify-between flex-wrap gap-6'>
                                <div className='w-[70vw] md:w-60 rounded-xl bg-red-300 h-[40vh]'></div>
                                <div className='w-[70vw] md:w-60 rounded-xl bg-red-300 h-[40vh]'></div>
                                <div className='w-[70vw] md:w-60 rounded-xl bg-red-300 h-[40vh]'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full gap-7 bg-black text-white p-8 flex justify-between flex-wrap overflow-hidden'>
                    <div>
                        <h1 className='text-white text-xl'>Developed by, Akash Bhaumik</h1>
                        <h1>Github Link : </h1>
                        <a className='text-blue-600' href="https://github.com/lazyDeveloperAkash?tab=repositorie">https://github.com/lazyDeveloperAkash?tab=repositorie</a>
                    </div>
                    <div>
                        <h1>For FrontEnd : </h1>
                        <a className='mb-2 text-blue-600 text-base' href="https://github.com/lazyDeveloperAkash?tab=repositorie">https://github.com/lazyDeveloperAkash?tab=repositorie</a>
                        <h1>For Backend : </h1>
                        <a className='text-blue-600 text-base' href="https://github.com/lazyDeveloperAkash/internShala_Api">https://github.com/lazyDeveloperAkash/internShala_Api</a>
                    </div>
                    <div>
                        <h1 className='text-xl'>Contact me</h1><br />
                        <h1>Mobile No - 7063302206</h1>
                        <h1>Email - akash.official.me@gmail.com</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page