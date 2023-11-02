import { asyncSingupStudent } from '@/store/Actions/studentActions';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Singup = (props) => {


    const { setLogin } = props;
    const dispatch = useDispatch();
    const [email, setemail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    const [city, setCity] = useState("");
    const [gender, setGender] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const newStudent = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            contact: contact,
            city: city,
            gender: gender
        }
        dispatch(asyncSingupStudent(newStudent));
    }

    const router = useRouter();
    const { isAuthenticated } = useSelector(state => state.studentReducer);
    console.log(isAuthenticated)
    useEffect(() => {
        if (isAuthenticated) router.push("/student/auth");
    }, [isAuthenticated])

    return (
        <div className={`w-[11/12] md:w-[50vmax] lg:w-[30vmax] mt-3 rounded-2xl pl-10 pr-10 pt-5 mb-5 shadow-lg shadow-cyan-500`}>
            <div className="w-full h-20 flex justify-center items-center">
                <div className={`w-full h-4/6 rounded-xl flex justify-center items-center gap-4 cursor-pointer border-2 border-sky-500`}>
                    <img className="h-6" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                    <h3>Sing up with Google</h3>
                </div>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <div className="w-2/5 h-[1px] bg-[#545353]"></div>
                <h1>OR</h1>
                <div className="w-2/5 h-[1px] bg-[#4e4d4d]"></div>
            </div>
            <div className="container">
                <form action="" onSubmit={submitHandler}>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between w-full">
                            <div className="w-2/5">
                                <label htmlFor="">First Name</label>
                                <input className='w-full h-10 rounded-lg	px-3 py-2 mt-1 border-2 focus:border-sky-500 focus:outline-none' name='firstName' placeholder="John" type="text" onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="w-2/5">
                                <label htmlFor="">Last Name</label>
                                <input className='w-full h-10 rounded-lg	p-3 mt-1 border-2 focus:border-sky-500 focus:outline-none' name='lastName' placeholder="Doe" type="text" onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input className='w-full h-10 rounded-lg	p-3 mt-1 border-2 focus:border-sky-500 focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' name='email' placeholder="Something@gmail.com" type="email" onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <input className='w-full h-10 rounded-lg	p-3 mt-1 border-2 focus:border-sky-500 focus:outline-none' name='password' placeholder="Password must be Strong" type="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="flex items-center justify-between w-full ">
                            <div className="w-3/5">
                                <label htmlFor="">Contact</label>
                                <input className='w-full h-10 rounded-lg	p-3 mt-1 border-2 focus:border-sky-500 focus:outline-none' name='contact' placeholder="Enter Your Mobile Number" type="number" onChange={(e) => setContact(e.target.value)} />
                            </div>
                            <div className="w-1/3">
                                <label htmlFor="">City</label>
                                <input className='w-full h-10 rounded-lg	p-3 mt-1 border-2 focus:border-sky-500 focus:outline-none' name='city' placeholder="City" type="text" onChange={(e) => setCity(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <legend>Gender</legend>
                            <div className="flex items-center gap-4 mt-1">
                                <div>
                                    <label>Male</label>
                                    <input className="ml-2" type="radio" name="gender" value="Male" onChange={() => setGender("Male")} />
                                </div>
                                <div>
                                    <label>Female</label>
                                    <input className="ml-2" type="radio" name='gender' value="Female" onChange={() => setGender("Female")} />
                                </div>
                                <div>
                                    <label>Other</label>
                                    <input className="ml-2" type="radio" name='gender' value="Other" onChange={() => setGender("Other")} />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center flex-col gap-2 my-3">
                            <button type='submit' className={`px-20 py-2 rounded-3xl bg-cyan-400`}>Sing Up</button>
                            <h3>Already Registered? <a onClick={() => setLogin(true)} className="text-cyan-400 cursor-pointer">Login</a></h3>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Singup