import { combineReducers, configureStore } from "@reduxjs/toolkit";
import count from "./slices/count";
import authSlice from "./slices/authSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({
    count: count,
    authSlice:authSlice,
})

export type RootState = ReturnType<typeof rootReducer>;


const store = configureStore({
    reducer: rootReducer,
})

export default store;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector