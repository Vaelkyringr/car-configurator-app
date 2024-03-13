import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VehicleConfiguration, Engine, Color } from './vehicleConfiguration';

interface VehicleConfigurationState {
    value: VehicleConfiguration;
}

const initialState: VehicleConfigurationState = {
    value: {
        engine: {} as Engine,
        color: { fileName: "v60_default.png" } as Color,
        totalCost: 520000
    },
}

const vehicleConfigurationSlice = createSlice({
    name: "VehicleConfigurationState",
    initialState,
    reducers: {
        addEngineConfiguration: (state, action: PayloadAction<Engine>) => {
            state.value.engine = action.payload;
            state.value.totalCost += action.payload.cost;
        },
        removeEngineConfiguration: (state, action: PayloadAction<Engine>) => {
            state.value.engine = {} as Engine;
            state.value.totalCost -= action.payload.cost;
        },
        addColorConfiguration: (state, action: PayloadAction<Color>) => {
            state.value.color = action.payload;
            state.value.totalCost += action.payload.cost;
            state.value.color.fileName = action.payload.fileName;
        },
        removeColorConfiguration: (state, action: PayloadAction<Color>) => {
            state.value.color = {} as Color;
            state.value.totalCost -= action.payload.cost;
        }
    }
})

export const { addEngineConfiguration, removeEngineConfiguration, addColorConfiguration, removeColorConfiguration } = vehicleConfigurationSlice.actions;

export default vehicleConfigurationSlice.reducer;