import axios from "@/utils/axios";
import { addStudent, removeStudent, isError, removeError } from "../Reducers/studentReducers";

export const asyncCurrentStudent = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/student");
        dispatch(addStudent(data));
    } catch (error) {
        dispatch(isError(error.response.data.message));
    }
}

export const asyncSingupStudent = (student) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/student/singup", student);
        asyncCurrentStudent();
        console.log(data);
    } catch (error) {
        dispatch(isError(error.response.data.message));
    }
}

export const asyncSinginStudent = (student) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/student/singin", student);
        asyncCurrentStudent();
        console.log(data);
    } catch (error) {
        dispatch(isError(error.response.data.message));
    }
}

export const asyncSingoutStudent = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/student/singout");
        dispatch(removeStudent());
        console.log(data);
    } catch (error) {
        dispatch(isError(error.response.data.message));
    }
}

export const asyncUpdateStudent = (student) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/student/update", student);
        dispatch(asyncCurrentStudent());
        console.log(data);
    } catch (error) {
        dispatch(isError(error.response.data.message));
    }
}

export const asyncAvatarStudent = (avatar) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/student/avatar", avatar);
        dispatch(asyncCurrentStudent());
        console.log(data);
    } catch (error) {
        dispatch(isError(error.response.data.message));
    }
}

export const asyncResetPasswordStudent = (password) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/student/forget-link", password);
        dispatch(asyncCurrentStudent());
        console.log(data);
    } catch (error) {
        console.log(error.response.data.message)
        dispatch(isError(error.response.data.message));
    }
}

export const asyncDeleteStudent = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/student/delete");
        dispatch(removeStudent());
        console.log(data);
    } catch (error) {
        console.log(error.response.data.message)
        dispatch(isError(error.response.data.message));
    }
}