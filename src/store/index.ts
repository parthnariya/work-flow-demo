import { configureStore } from "@reduxjs/toolkit";
import workFlowSlice from "./workFlowSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    workFlow: workFlowSlice,
  },
});

/* type of root state */
export type RootState = ReturnType<typeof store.getState>;

/* type of dispatch */
export type AppDispatch = typeof store.dispatch;

/* hooks to dispatch and selector the store data */
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
