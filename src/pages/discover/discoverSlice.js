import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    banner: []
}

const url = "http://123.207.32.32:9001/banner"
//action
export const getData = createAsyncThunk(
    "discover/getData",
    async () => {
        const resp = await fetch(url)
        const data = await resp.json()
        return data
    }
)


const discoverSlice = createSlice({
    name: "discover",
    initialState,
    extraReducers: builder => {
        builder.addCase(getData.fulfilled, (state, action) => {
            state.banner = action.payload
        })
    }

})



export default discoverSlice.reducer