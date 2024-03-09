import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface VehicleColorState {
    colorIsSelected: boolean;
    value: string;
}

const initialState: VehicleColorState = {
    colorIsSelected: false,
    value: "v60_default.png",
}

const vehicleColorSlice = createSlice({
    name: "VehicleColorState",
    initialState,
    reducers: {
        setVehicleColor: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
            state.colorIsSelected = true;
        },
        resetVehicleColor: (state) => {
            state.value = "v60_default.png";
            state.colorIsSelected = false;
        }
    }
}) 

export const { setVehicleColor, resetVehicleColor } = vehicleColorSlice.actions;

export default vehicleColorSlice.reducer;