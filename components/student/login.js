import { asyncSinginStudent } from '@/store/Actions/studentActions';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Login = (props) => {

    const { setLogin } = props;
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();


    const loginSubmitHandler = (e) => {
        e.preventDefault();
        const logedinStudent = {
            email: email,
            password: password
        }
        dispatch(asyncSinginStudent(logedinStudent));
    }

    const { isAuthenticated } = useSelector(state => state.studentReducer);
    useEffect(() => {
        if (isAuthenticated) router.push("/student/auth");
    }, [isAuthenticated])

    return (
        <div className={`absolute w-full h-[108vh] flex items-center justify-center bg-[#0000001a]`}>
            <div className={`w-[11/12] md:w-[60vmax] lg:w-[30vmax] bg-white p-3 flex flex-col items-center gap-8 border rounded-xl shadow-lg shadow-cyan-500`}>
                <div className="flex items-center justify-end w-full">
                    <img onClick={() => setLogin(false)} className="h-6 cursor-pointer" src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png" alt="" />
                </div>
                <h1 className="text-[2vmax]">Student Login</h1>
                <form onSubmit={loginSubmitHandler}>
                    <div className="w-full flex flex-col gap-5">
                        <div>
                            <label htmlFor="">Email</label>
                            <input className='w-full h-10 rounded-lg	p-3 mt-1 border-2 focus:border-sky-500 focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' name='email' placeholder="Something@gmail.com" type="email" onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <input className='w-full h-10 rounded-lg	p-3 mt-1 border-2 focus:border-sky-500 focus:outline-none' name='password' placeholder="Password must be Strong" type="password" onChange={(e) => setPassword(e.target.value)} />
                            <div className="w-full flex justify-end mt-2"><a className="text-cyan-400" href="">Forget Password?</a></div>
                        </div>
                        <div className="flex items-center flex-col gap-2 my-3">
                            <button type='submit' className={`px-20 py-2 rounded-3xl bg-cyan-400`}>Login</button>
                            <h3>New Student?<a onClick={() => setLogin(false)} href="" className="text-cyan-400 cursor-pointer">Register</a></h3>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login