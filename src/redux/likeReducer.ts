import { createSlice } from '@reduxjs/toolkit'
import { omit } from 'lodash'
//ОПИС ТИПІВ ДАННИХ
type likeProductsType = {
    [id: number]: boolean
}

//ОПИС СТРУКТУРИ ЯК БУДУТЬ ЗБЕРІГАТЬСЯ
//опис значення за замовчуванням
export const initialState: likeProductsType = {}

//СТВОРЕННЯ СЛАЙСУ
export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        addLike: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),

        removeLike: (state, action) => omit(state, action.payload),
    },
})

export const { addLike, removeLike } = likeSlice.actions
export default likeSlice.reducer
