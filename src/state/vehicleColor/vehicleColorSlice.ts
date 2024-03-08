import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface VehicleColorState {
    value: string;
}

const initialState: VehicleColorState = {
    value: "path/to/file/",
}

const counterSlice = createSlice({
    name: "VehicleColorState",
    initialState,
    reducers: {
        setVehicleColor: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    }
})

export const { setVehicleColor } = counterSlice.actions;

export default counterSlice.reducer;