import React, { useState } from 'react'

const Filter = (props) => {

    const [role, setRole] = useState("");
    const [salary, setSalary] = useState("");
    const [location, setLocation] = useState("");
    const [home, setHome] = useState(false);
    const [office, setOffice] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(salary);
    }

    return (
        <div className=''>
            <div className='flex w-full px-[2vmax] mb-6 bg-white p-4'>
                <form onSubmit={submitHandler}>
                    <div className='flex gap-6 flex-col'>
                        <div>
                            <label htmlFor="">Job Profile</label>
                            <input className='w-full h-10 rounded-lg p-3 mt-1 border-2 focus:border-sky-500 focus:outline-none' placeholder="e.g. Marcketing" type="text" onChange={(e) => setRole(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Location</label>
                            <input className='w-full h-10 rounded-lg p-3 mt-1 border-2 focus:border-sky-500 focus:outline-none' placeholder="e.g. Delhi" type="text" onChange={(e) => setLocation(e.target.value)} />
                        </div>
                        <div>
                            <div className='flex gap-4'><input onChange={(e) => setHome(e.target.value)} type="checkbox" /> <h1>Work Form Home</h1></div>
                            <div className='flex gap-4'><input onChange={(e) => setOffice(e.target.value)} type="checkbox" /> <h1>Work Form Office</h1></div>
                        </div>
                        <div>
                            <label htmlFor="">Min Expected Salary</label>
                            <input type="range" className='w-full h-[1px]' onChange={(e) => setSalary(e.target.value)} />
                        </div>
                        <button className='px-2 py-2 rounded-2xl bg-cyan-400' type='submit'>submit</button>
                    </div>
                </form>
                <div className='flex flex-col items-center gap-8'>
                    <div className=''></div>
                </div>
            </div>
        </div>
    )
}

export default Filter