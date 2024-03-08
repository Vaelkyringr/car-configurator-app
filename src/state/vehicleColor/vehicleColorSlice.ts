import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface VehicleColorState {
    value: string;
}

const initialState: VehicleColorState = {
    value: "path/to/file/",
}

const vehicleColorSlice = createSlice({
    name: "VehicleColorState",
    initialState,
    reducers: {
        setVehicleColor: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    }
})

export const { setVehicleColor } = vehicleColorSlice.actions;

export default vehicleColorSlice.reducer;