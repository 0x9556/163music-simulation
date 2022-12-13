import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTopBanners, getHotRecommend, getNewAlbums, getToplist, getArtist } from '../../../../../services/recommend'


const initialState = {
    banners: [],
    hotRecommend: [],
    newAlbums: [],
    toplist: [],
    settleSinger: []
}

//action
export const getTopBannerAction = createAsyncThunk(
    "recommend/getBannerData",
    async () => {
        const info = await getTopBanners()
        return info.map(item => ({
            encodeId: item.encodeId,
            imageUrl: item.imageUrl,
            typeTitle: item.typeTitle
        }))
    }
)

export const getHotRecommendAction = createAsyncThunk(
    "recommend/getHotRecommend",
    async () => {
        const info = await getHotRecommend()
        return info.map(item => ({
            id: item.id,
            name: item.name,
            picUrl: item.picUrl,
            playCount: item.playCount
        }))
    }
)

export const getNewAlbumsAction = createAsyncThunk(
    "recommend/getNewAlbums",
    async () => {
        const info = await getNewAlbums()
        return info.map(item => ({
            name: item.name,
            id: item.id,
            type: item.type,
            picUrl: item.picUrl,
            artist: item.artist.name,
            artistId: item.artist.id
        }))
    }
)

export const getToplistAction = createAsyncThunk(
    "recommend/getToplist",
    async (id) => {
        const info = await getToplist(id)
        const tracks = info.tracks.slice(0, 10).map(item => ({
            id: item.id,
            name: item.name
        }))
        return {
            id: info.id,
            name: info.name,
            coverImgUrl: info.coverImgUrl,
            tracks: tracks
        }
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
            state.toplist.push(action.payload)
        })
        builder.addCase(getSettleSingerAction.fulfilled, (state, action) => {
            state.settleSinger = action.payload
        })
    }
})


export default discoverSlice.reducer