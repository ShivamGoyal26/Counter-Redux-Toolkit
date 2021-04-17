import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'Counter',
    initialState: {
        Count: 0
    },
    reducers: {
        Increment: (state) => {
            state.Count = state.Count + 1
        },
        Decrement: (state) => {
            state.Count = state.Count - 1
        },
        incrementByAmount: (state, action) => {
            state.Count = state.Count + action.payload
        }
    }
})

export const { Increment, Decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer