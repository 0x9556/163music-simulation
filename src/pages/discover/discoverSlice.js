import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    banners: []
}

const url = "http://123.207.32.32:9001/banner"
//action
export const getData = createAsyncThunk(
    "discover/getBannerData",
    async () => {
        const resp = await fetch(url)
        const {banners} = await resp.json()
        return banners
    }
)


const discoverSlice = createSlice({
    name: "discover",
    initialState,
    extraReducers: builder => {
        builder.addCase(getData.fulfilled, (state, action) => {
            state.banners = action.payload
            console.log(state.banners)
        })
    }

})



export default discoverSlice.reducer