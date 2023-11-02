'use client'
import { asyncAvatarStudent, asyncDeleteStudent, asyncResetPasswordStudent, asyncUpdateStudent } from '@/store/Actions/studentActions';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Update = () => {

    const { student } = useSelector(state => state.studentReducer);
    console.log(student);
    const dispatch = useDispatch();
    const [password, setPassword] = useState(false);
    const [oldpassword, setOldPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [email, setemail] = useState(student && student.email);
    const [firstName, setFirstName] = useState(student && student.firstName);
    const [lastName, setLastName] = useState(student && student.lastName);
    const [contact, setContact] = useState(student && student.contact);
    const [city, setCity] = useState(student && student.city);
    const [gender, setGender] = useState(student && student.gender);

    const updateHandler = (e) => {
        e.preventDefault();

        const updatedUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            contact: contact,
            city: city,
            gender: gender
        }

        dispatch(asyncUpdateStudent(updatedUser));
        // router.push("/student/auth");
    }

    const changePasswordHandler = (e) => {
        e.preventDefault();

        const password = {
            oldPassword: oldpassword,
            newPassword: newpassword
        }
        
        dispatch(asyncResetPasswordStudent(password));
        setPassword(false);
    }

    const avatarHandler = (e) => {
        e.preventDefault();
        if(!e.target) return;
        const formData = new FormData(e.target);
        formData.set("avatar", e.target.avatar.files[0]);
        if(formData) dispatch(asyncAvatarStudent(formData));
    }

    const clickHandler = () => {
        document.querySelector("#file").click();
    }
    const submitImageHandler = () => {
        document.querySelector("#button").click();
    }

    const deleteAccountHandler = ()=>{
        if(!window.confirm("Confirm to Delete your Account!")) return;
        dispatch(asyncDeleteStudent());
    }

    return (
        <div className='flex items-center justify-center'>
            {password ? (<div className='absolute left-0 top-0 bg-[#0000001a] w-full h-full flex items-center justify-center'>
                <div className={`w-[11/12] md:w-[60vmax] lg:w-[30vmax] bg-white p-3 flex flex-col items-center gap-8 border rounded-xl shadow-lg shadow-cyan-500`}>
                    <div className="flex items-center justify-end w-full">
                        <img onClick={() => setPassword(false)} className="h-6 cursor-pointer" src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png" alt="" />
                    </div>
                    <h1 className="text-[2vmax]">Change Password</h1>
                    <form onSubmit={changePasswordHandler}>
                        <div className="w-full flex flex-col gap-5">
                            <div>
                                <label htmlFor="">Old Password</label>
                                <input className='w-full h-10 rounded-lg	p-3 mt-1 border-2 focus:border-sky-500 focus:outline-none' name='password' placeholder="Password must be Strong" type="password" onChange={(e) => setOldPassword(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="">New Password</label>
                                <input className='w-full h-10 rounded-lg	p-3 mt-1 border-2 focus:border-sky-500 focus:outline-none' name='password' placeholder="Password must be Strong" type="password" onChange={(e) => setNewPassword(e.target.value)} />
                            </div>
                            <div className="flex items-center flex-col gap-2 my-3">
                                <button type='submit' className={`px-20 py-2 rounded-3xl bg-red-500`}>Reset Password</button>                            </div>
                        </div>
                    </form>
                </div>
            </div>) : ""}
            <div className={`w-[11/12] md:w-[50vmax] lg:w-[30vmax] mt-3 rounded-2xl pl-10 pr-10 pt-5 mb-5 shadow-lg shadow-cyan-500`} >
                <div className="w-full h-20 flex justify-center items-center">
                    <div className={`w-full h-4/6 rounded-xl flex justify-center items-center gap-4 cursor-pointer border-2 border-sky-500`} onClick={() => setPassword(true)}>
                        <h3>Want to change Password?</h3>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full mt-3">
                    <div className="w-2/5 h-[1px] bg-[#545353]"></div>
                    <h1>OR</h1>
                    <div className="w-2/5 h-[1px] bg-[#4e4d4d]"></div>
                </div>
                <div className="container">
                    <form onSubmit={avatarHandler} encType="multipart/form-data">
                        <input id='file' name='avatar' className='hidden' type="file" onChange={submitImageHandler} />
                        <div className='w-full flex justify-center items-center my-4'>
                            <div className='h-24 w-24 rounded-full cursor-pointer overflow-hidden object-cover' onClick={clickHandler}>
                                <img className='h-full' src={student && student.avatar.url} alt="" />
                            </div>
                            <button id='button' type='submit'/>
                        </div>
                    </form>
                    <form action="" onSubmit={updateHandler}>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between w-full">
                                <div className="w-2/5">
                                    <label htmlFor="">First Name</label>
                                    <input className='w-full h-10 rounded-lg px-3 py-2 mt-1 border-2 focus:border-sky-500 focus:outline-none' value={firstName} placeholder="John" type="text" onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="w-2/5">
                                    <label htmlFor="">Last Name</label>
                                    <input className='w-full h-10 rounded-lg p-3 mt-1 border-2 focus:border-sky-500 focus:outline-none' value={lastName} placeholder="Doe" type="text" onChange={(e) => setLastName(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="">Email</label>
                                <input className='w-full h-10 rounded-lg p-3 mt-1 border-2 focus:border-sky-500 focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' value={email} placeholder="Something@gmail.com" type="email" onChange={(e) => setemail(e.target.value)} />
                            </div>
                            <div className="flex items-center justify-between w-full ">
                                <div className="w-3/5">
                                    <label htmlFor="">Contact</label>
                                    <input className='w-full h-10 rounded-lg p-3 mt-1 border-2 focus:border-sky-500 focus:outline-none' value={contact} placeholder="Enter Your Mobile Number" type="number" onChange={(e) => setContact(e.target.value)} />
                                </div>
                                <div className="w-1/3">
                                    <label htmlFor="">City</label>
                                    <input className='w-full h-10 rounded-lg p-3 mt-1 border-2 focus:border-sky-500 focus:outline-none' value={city} placeholder="City" type="text" onChange={(e) => setCity(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <legend>Gender</legend>
                                <div className="flex items-center gap-4 mt-1">
                                    <div>
                                        <label>Male</label>
                                        <input className="ml-2" checked={gender === "Male"} type="radio" name="gender" value="Male" onChange={() => setGender("Male")} />
                                    </div>
                                    <div>
                                        <label>Female</label>
                                        <input className="ml-2" checked={gender === "Female"} type="radio" name='gender' value="Female" onChange={() => setGender("Female")} />
                                    </div>
                                    <div>
                                        <label>Other</label>
                                        <input className="ml-2" checked={gender === "Other"} type="radio" name='gender' value="Other" onChange={() => setGender("Other")} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center flex-col gap-2 my-3">
                                <button type='submit' className={`px-20 py-2 rounded-3xl bg-yellow-400`}>Update</button>
                            </div>
                        </div>
                    </form>
                    <div className='w-full flex justify-center mb-4'><button onClick={deleteAccountHandler} className={`px-10 py-2 rounded-3xl bg-red-600`}>Delete Account</button></div>
                </div>
            </div>
        </div>
    )
}

export default Update