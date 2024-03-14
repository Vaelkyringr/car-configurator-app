import { configureStore } from "@reduxjs/toolkit";
import vehicleConfigurationReducer from "./vehicleConfiguration/vehicleConfiguratonSlice";

export const store = configureStore({
  reducer: {
    vehicleConfiguration: vehicleConfigurationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
