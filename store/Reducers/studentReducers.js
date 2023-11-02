import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    student: null,
    errors: [],
    isAuthenticated: false
}

export const studentReducer = createSlice({
    name: "student",
    initialState,
    reducers: {
        addStudent: (state, action) => {
            state.student = action.payload;
            state.isAuthenticated = true;
        },
        removeStudent: (state, action) => {
            state.student = null;
            state.isAuthenticated = false;
        },
        isError: (state, action) => {
            state.errors.push(action.payload);
        },
        removeError: (state, action) => {
            state.errors = [];
        }
    },
})

// Action creators are generated for each case reducer function
export const { addStudent, removeStudent, isError, removeError } = studentReducer.actions

export default studentReducer.reducer