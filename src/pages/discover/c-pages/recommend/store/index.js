import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTopBanners, getHotRecommend, getNewAlbums, getToplist } from '../../../../../services/recommend'


const initialState = {
    banners: [],
    hotRecommend: [],
    newAlbums: [],
    toplist: {}
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

export const getToplistAction = createAsyncThunk(
    "recommend/getToplist",
    (id) => {
        return getToplist(id)
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
            // console.log(action.payload)
            state.newAlbums = action.payload
        })

        builder.addCase(getToplistAction.fulfilled, (state, action) => {
            const id = action.meta.arg
            state.toplist[id] = action.payload
        })
    }
})


export default discoverSlice.reducer