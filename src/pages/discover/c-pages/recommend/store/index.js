import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTopBanners, getHotRecommend, getNewAlbums } from '../../../../../services/recommend'


const initialState = {
    banners: [],
    hotRecommend: [],
    newAlbums: []
}

//action
export const getTopBannerAction = createAsyncThunk(
    "recommend/getBannerData",
    () => {
        return getTopBanners()
    }
)

export const getHotRecommendAction = createAsyncThunk(
    "recommend/getHotRecommend",
    () => {
        return getHotRecommend()
    }
)

export const getNewAlbumsAction = createAsyncThunk(
    "recommend/getNewAlbums",
    () => {
        return getNewAlbums()
    }
)

const discoverSlice = createSlice({
    name: "recommend",
    initialState,
    extraReducers: builder => {
        builder.addCase(getTopBannerAction.fulfilled, (state, action) => {
            state.banners = action.payload
            // console.log(state.banners)
        })

        builder.addCase(getHotRecommendAction.fulfilled, (state, action) => {
            state.hotRecommend = action.payload

        })

        builder.addCase(getNewAlbumsAction.fulfilled, (state, action) => {
            state.newAlbums = action.payload
            console.log(state.newAlbums)
        })
    }
})


export default discoverSlice.reducer