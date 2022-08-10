import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: []
  },
  reducers: {
    addToCart: (state, action) => {
      const before = state.products
      state.products = [
        ...before,
        {
          ...action.payload,
          amount: 1
        }
      ]
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
