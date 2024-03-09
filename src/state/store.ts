import {configureStore } from "@reduxjs/toolkit";
import vehiclePriceReducer from "./vehiclePrice/vehiclePriceSlice";
import vehicleColorReducer from "./vehicleColor/vehicleColorSlice";

export const store = configureStore({
    reducer: {
        vehiclePrice: vehiclePriceReducer,
        vehicleColor: vehicleColorReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;