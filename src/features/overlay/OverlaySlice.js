import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
}

const OverlaySlice = createSlice({
    name: "overlay",
    initialState,
    reducers: {
        setLoader: (state, action)=>{
            state.isLoading = action.payload
        }
    }
});

export const {
    setLoader,
} = OverlaySlice.actions

export const overlaySelector = (state)=>state.overlay.isLoading

export default OverlaySlice.reducer