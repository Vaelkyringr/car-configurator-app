import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
}

const counterSlice = createSlice({
    name: "Counter",
    initialState,
    reducers: {
        increment: (state, /*action*/) => {
            state.value += 1;
        },
        decrement: (state, /*action*/) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;