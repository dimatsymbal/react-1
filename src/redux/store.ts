import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './likeReducer'

//ми створили сховище
//далі ми описали конкретно його один слайс
export const store = configureStore({
    reducer: {
        productsLikeState: likeReducer,
    },
})

//опис типів хуків
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
