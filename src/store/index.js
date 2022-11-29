import { configureStore } from '@reduxjs/toolkit'
import discoverReducer from '../pages/discover/discoverSlice'

const store = configureStore({
   reducer: {
      discover: discoverReducer
   }
})

export default store