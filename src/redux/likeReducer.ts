import { createSlice } from '@reduxjs/toolkit'

//ОПИС ТИПІВ ДАННИХ
type likeProductsType = {
    [id: number]: boolean
}

//ОПИС СТРУКТУРИ ЯК БУДУТЬ ЗБЕРІГАТЬСЯ
//опис значення за замовчуванням
export const initialState: likeProductsType = {
    1: true,
    2: false,
}

//СТВОРЕННЯ СЛАЙСУ
export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {},
})

export default likeSlice.reducer
