
import { combineReducers } from '@reduxjs/toolkit'
import RecommendReducer from '../pages/discover/c-pages/recommend/store'

export default combineReducers({
    recommend: RecommendReducer
})