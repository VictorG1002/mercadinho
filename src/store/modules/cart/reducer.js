import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: []
  },
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.products.findIndex(
        p => p.id == action.payload.id
      )
      if (productIndex >= 0) {
        state.products[productIndex].amount += 1
      } else {
        const before = state.products
        state.products = [
          ...before,
          {
            ...action.payload,
            amount: 1
          }
        ]
      }
    },
    removeToCart: (state, action) => {
      const productIndex = state.products.findIndex(
        p => p.id == action.payload.id
      )
      if (productIndex >= 0) {
        state.products.splice(productIndex, 1)
      }
    },
    updateAmount: (state, action) => {
      const productIndex = state.products.findIndex(
        p => p.id == action.payload.id
      )
      if (productIndex >= 0) {
        state.products[productIndex].amount = action.payload.amount
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart, updateAmount } = cartSlice.actions

export default cartSlice.reducer
