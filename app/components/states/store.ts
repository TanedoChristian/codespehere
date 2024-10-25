import { configureStore } from "@reduxjs/toolkit";
import createWebReducer from "./createWebSlice";
export const store = configureStore({
  reducer: {
    createWeb: createWebReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
