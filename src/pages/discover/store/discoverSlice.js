import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTopBanners } from '../../../services/discover'


const initialState = {
    banners: []
}

//action
export const getTopBannerAction = createAsyncThunk(
    "discover/getBannerData",
    () => {
        return getTopBanners()
    }
)

const discoverSlice = createSlice({
    name: "discover",
    initialState,
    extraReducers: builder => {
        builder.addCase(getTopBannerAction.fulfilled, (state, action) => {
            state.banners = action.payload
            console.log(state.banners)
        })
    }
})


export default discoverSlice.reducer