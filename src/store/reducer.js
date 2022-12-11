
import { combineReducers } from '@reduxjs/toolkit'
import recommendReducer from '../pages/discover/c-pages/recommend/store'
import playerReducer from '../pages/player/store'

export default combineReducers({
    recommend: recommendReducer,
    player: playerReducer
})