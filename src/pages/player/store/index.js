import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetails, getLyrics } from '../../../services/player'
import { parseLyrics } from '../../../utils/parse-lyrics'

const getSongInfo = async (id) => {
    const info = await getSongDetails(id)
    const lyric = (parseLyrics(await getLyrics(id)) || "")
    if (!info) return
    return {
        id: info.id,
        name: info.name,
        artist: (info.ar)[0].name,
        duration: info.dt,
        pic: info.al.picUrl,
        lyric: lyric
    }
}

const initialState = {
    currentSong: {
        id: 0,
        name: "",
        artist: "",
        pic: null,
        duration: 0,
        lyric: ""
    },
    playList: [],
    currentSongIndex: 0,
    lyricIndex: 0,
    sequence: 0 //0:Loop,1:shuffle,2:repeat
}

const playSongAction = createAsyncThunk(
    "player/getSongDetail",
    async (id, api) => {
        const dispatch = api.dispatch
        const { playList } = api.getState().player
        const songIndex = playList.findIndex(song => song.id === id)
        if (songIndex !== -1) {
            dispatch(changeCurrentSongIndex(songIndex))
            dispatch(playList[songIndex])
        } else {
            const song = await getSongInfo(id)
            dispatch(changeCurrentSongIndex(playList.length))
            dispatch(addToPlaylist(song))
            dispatch(changeCurrentSong(song))
        }
    }
)

const addPlaylistAction = createAsyncThunk(
    "player/addPlaylist",
    async (id, api) => {
        const dispatch = api.dispatch
        const { playList } = api.getState().player
        const songIndex = playList.findIndex(song => song.id === id)
        if (songIndex === -1) {
            const song = await getSongInfo(id)
            dispatch(addToPlaylist(song))
        }
    }
)

const switchSongAction = createAsyncThunk(
    "player/changeCurrentSong",
    (tag, api) => {
        const dispatch = api.dispatch
        const { currentSongIndex, sequence, playList } = api.getState().player
        let newSongIndex = currentSongIndex

        switch (sequence) {
            default:
                newSongIndex += tag
                if (newSongIndex >= playList.length) newSongIndex = 0
                if (newSongIndex < 0) newSongIndex = playList.length - 1
                dispatch(changeCurrentSongIndex(newSongIndex))
                dispatch(changeCurrentSong(playList[newSongIndex]))
                break
            case 1:
                let randomIndex = Math.floor(Math.random() * playList.length)
                newSongIndex = newSongIndex === randomIndex ? randomIndex + tag : randomIndex
                if (newSongIndex >= playList.length) newSongIndex = 0
                if (newSongIndex < 0) newSongIndex = playList.length - 1
                dispatch(changeCurrentSongIndex(newSongIndex))
                dispatch(changeCurrentSong(playList[newSongIndex]))
                break
        }
    }
)

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        changeCurrentSong: (state, action) => {
            state.currentSong = action.payload
        },
        addToPlaylist: (state, action) => {
            state.playList.push(action.payload)
        },
        changeCurrentSongIndex: (state, action) => {
            state.currentSongIndex = action.payload
        },
        changeLyricIndex: (state, action) => {
            state.lyricIndex = action.payload
        },
        changeSequence: state => {
            if (state.sequence < 2) {
                state.sequence++
            } else {
                state.sequence = 0
            }
        },
    },

})

export default playerSlice.reducer
export const { addToPlaylist, changeCurrentSongIndex, changeSequence, changeCurrentSong, changeLyricIndex } = playerSlice.actions
export { playSongAction, switchSongAction, addPlaylistAction }