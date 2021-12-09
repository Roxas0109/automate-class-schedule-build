import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isPop: false,
}

const PopupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        setPop: (state, action)=>{
            state.isPop = action.payload
        }
    }
});

export const {
    setPop,
} = PopupSlice.actions

export const popupSelector = (state) => state.popup.isPop

export default PopupSlice.reducer