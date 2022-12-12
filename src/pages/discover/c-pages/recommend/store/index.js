import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTopBanners, getHotRecommend, getNewAlbums, getToplist, getArtist } from '../../../../../services/recommend'


const initialState = {
    banners: [],
    hotRecommend: [],
    newAlbums: [],
    toplist: {},
    settleSinger: []
}

//action
export const getTopBannerAction = createAsyncThunk(
    "recommend/getBannerData",
    async () => {
        return await getTopBanners()
    }
)

export const getHotRecommendAction = createAsyncThunk(
    "recommend/getHotRecommend",
    async () => {
        return await getHotRecommend()
    }
)

export const getNewAlbumsAction = createAsyncThunk(
    "recommend/getNewAlbums",
    async () => {
        return await getNewAlbums()
    }
)

export const getToplistAction = createAsyncThunk(
    "recommend/getToplist",
    async (id) => {
        return await getToplist(id)
    }
)

export const getSettleSingerAction = createAsyncThunk(
    "recommend/getArtists",
    async ({ cat, limit }) => {
        const artists = await getArtist(cat, limit)
        const settleSinger = artists.map(item => ({
            name: item.name,
            id: item.id,
            picUrl: item.picUrl,
        }))
        return settleSinger
    }
)

const discoverSlice = createSlice({
    name: "recommend",
    initialState,
    extraReducers: builder => {
        builder.addCase(getTopBannerAction.fulfilled, (state, action) => {
            state.banners = action.payload
        })

        builder.addCase(getHotRecommendAction.fulfilled, (state, action) => {
            state.hotRecommend = action.payload

        })

        builder.addCase(getNewAlbumsAction.fulfilled, (state, action) => {
            state.newAlbums = action.payload
        })

        builder.addCase(getToplistAction.fulfilled, (state, action) => {
            const id = action.meta.arg
            state.toplist[id] = action.payload
        })
        builder.addCase(getSettleSingerAction.fulfilled, (state, action) => {
            state.settleSinger = action.payload
        })
    }
})


export default discoverSlice.reducer