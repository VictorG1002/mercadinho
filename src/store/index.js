import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './modules/cart/reducer'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})
