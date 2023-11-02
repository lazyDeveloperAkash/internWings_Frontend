"use client"

import { asyncCurrentStudent, asyncSingoutStudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"


const layout = ({ children }) => {

    const dispatch = useDispatch();
    const router = useRouter();
    const { isAuthenticated } = useSelector(state => state.studentReducer);
    useEffect(() => {
        dispatch(asyncCurrentStudent());
        // if (isAuthenticated) router.push("/student/auth");
        if (!isAuthenticated) router.push("/student/singup")
    }, [isAuthenticated])

    return (
        <>{children}</>
    )
}

export default layout