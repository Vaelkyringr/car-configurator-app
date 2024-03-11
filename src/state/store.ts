import {configureStore } from "@reduxjs/toolkit";
import vehicleColorReducer from "./vehicleColor/vehicleColorSlice";
import vehicleConfigurationReducer from "./vehicleConfiguration/vehicleConfiguratonSlice";

export const store = configureStore({
    reducer: {
        vehicleColor: vehicleColorReducer,
        vehicleConfiguration: vehicleConfigurationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;