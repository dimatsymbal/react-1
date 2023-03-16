import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import likeReducer from './likeReducer'

//ми створили глобальне сховище

export const store = configureStore({
    reducer: {
        productsLikeState: likeReducer,
        productsInCart: cartReducer,
    },
})

//опис типів хуків
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
