import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VehicleConfiguration, Engine } from './vehicleConfiguration';

interface VehicleConfigurationState {
    value: VehicleConfiguration;
}

const initialState: VehicleConfigurationState = {
    value: {
        engine: {} as Engine,
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
    }
})

export const { addEngineConfiguration, removeEngineConfiguration } = vehicleConfigurationSlice.actions;

export default vehicleConfigurationSlice.reducer;