import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value : 0
}

export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers :{
        incrementCounter : (state)=> {
            state.value = state.value + 1;
        },
        decrementCounter : (state) => {
            state.value = state.value - 1;
        },
        resetCounter : (state) =>{ 
            state.value = 0
        },
        incrementByNumber : (state, action) => {
            state.value += action.payload
        }
    }
})


export const {incrementCounter, decrementCounter, resetCounter, incrementByNumber} = counter.actions
export default counter.reducer