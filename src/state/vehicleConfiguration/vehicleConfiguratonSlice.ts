import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VehicleConfiguration, Engine, Color, InteriorOption, ExteriorOption } from "./vehicleConfiguration";

interface VehicleConfigurationState {
  value: VehicleConfiguration;
}

const initialState: VehicleConfigurationState = {
  value: {
    engine: {} as Engine,
    interiorOptions: [] as InteriorOption[],
    exteriorOptions: [] as ExteriorOption[],
    color: { fileName: "v60_default.png", cost: 0 } as Color,
    totalCost: 520000,
  },
};

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
      state.value.color.fileName = action.payload.fileName;
      state.value.totalCost += action.payload.cost;
    },
    removeColorConfiguration: (state, action: PayloadAction<Color>) => {
      state.value.color = {} as Color;
      state.value.totalCost -= action.payload.cost;
    },
    addExteriorOptionConfiguration: (state,action: PayloadAction<ExteriorOption>) => {
      state.value.exteriorOptions.push(action.payload);
      state.value.totalCost += action.payload.cost;
    },
    removeExteriorOptionConfiguration: (state, action: PayloadAction<ExteriorOption>) => {
      const index = state.value.exteriorOptions.findIndex((option) => option.id === action.payload.id);
      if (index !== -1) {
        state.value.exteriorOptions.splice(index, 1);
        state.value.totalCost -= action.payload.cost;
      }
    },
  },
});

export const {
  addEngineConfiguration,
  removeEngineConfiguration,
  addColorConfiguration,
  removeColorConfiguration,
  addExteriorOptionConfiguration,
  removeExteriorOptionConfiguration,
} = vehicleConfigurationSlice.actions;

export default vehicleConfigurationSlice.reducer;
