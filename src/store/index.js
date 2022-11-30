import { configureStore } from '@reduxjs/toolkit'

import cReducer from '../pages/discover/store'

const store = configureStore({
   reducer: {
      ...cReducer
   }
})

export default store