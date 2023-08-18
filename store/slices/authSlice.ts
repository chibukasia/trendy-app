import { createSlice } from '@reduxjs/toolkit';
interface User {
    email: string;
    token: string;
    emailVerified:boolean;
    phoneNumber: undefined | string;
    displayName: undefined | string;
    userId: string;
}

interface InitialStateProps {
    isLoggedIn: boolean,
    user: null | User,
    email: string,
    formState:'signup'|'login',
}

const initialState: InitialStateProps = {
    isLoggedIn: false,
    user: null,
    email:"",
    formState:'login',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user
        },
        signup: (state, action) => {
            state.user = action.payload.user
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null
        },
        setAuthState: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.user = action.payload.user;
        },
        setEmailValue: (state, action) => {
            state.email = action.payload.email
        },
        signUpOrLoginForm:(state, action) => {
            state.formState = action.payload.formState
        },
        updateLoginState:(state) => {
            state.isLoggedIn = !state.isLoggedIn
        }
    }
})

export const { login, logout, signup, setAuthState, setEmailValue, signUpOrLoginForm, updateLoginState } = authSlice.actions;

export default authSlice.reducer;

export const isLoggedIn = (state: InitialStateProps) => state.isLoggedIn
export const emailValue = (state: InitialStateProps) => state.email
export const user = (state: InitialStateProps) => state.user
export const formState = (state: InitialStateProps) => state.formState