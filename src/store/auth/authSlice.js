import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'authenticated', 'not-authenticated', 'checking'
        user: {},
        errorMessage: undefined,
    },
    reducers: {
        onChecking: ( state ) => {
            state.status = 'checking',
            state.user = {},
            state.errorMessage = undefined;
        },
        onLogging: (state, action) => {
            state.status = 'authenticated',
            state.user = action.payload,
            state.errorMessage = undefined
        },
        onLogout: (state, action) => {
            state.status = 'not-authenticated',
            state.user = {},
            state.errorMessage = action.payload
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined
        }
    }
})

export const { onChecking, onLogging, onLogout, clearErrorMessage } = authSlice.actions;