import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface VehiclePriceState {
    value: number;
}

const initialState: VehiclePriceState = {
    value: 520000,
}

const counterSlice = createSlice({
    name: "VehiclePriceState",
    initialState,
    reducers: {
        addToVehiclePrice: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        subtractFromVehiclePrice: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        }
    }
})

export const {addToVehiclePrice, subtractFromVehiclePrice} = counterSlice.actions;

export default counterSlice.reducer;