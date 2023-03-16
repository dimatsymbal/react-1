import { createSlice } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type CartType = {
    [id: number]: number
}

export const initialState: CartType = {
    1: 1,
}

export const cartSlice = createSlice({
    name: 'productsInCart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => ({
            ...state,
            [action.payload.id]:
                (state[action.payload.id] || 0) + action.payload.count,
        }),

        removeProductFromCart: (state, action) => omit(state, action.payload),

        addProductQuantity: (state, action) => ({
            ...state,
            [action.payload.id]: state[action.payload.id] + 1,
        }),

        removeProductQuantity: (state, action) => ({
            ...state,
            [action.payload.id]: state[action.payload.id] - 1,
        }),
    },
})

export const {
    addProductToCart,
    removeProductFromCart,
    addProductQuantity,
    removeProductQuantity,
} = cartSlice.actions

export default cartSlice.reducer
