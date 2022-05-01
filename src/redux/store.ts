import { configureStore } from "@reduxjs/toolkit";
import professionSlice from "./professionSlice";

export const store = configureStore({
  reducer: {
    profession: professionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
