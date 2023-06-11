import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Products } from 'Utils/ProductsArrey'
import axios from 'axios'

const initialState: Products[] = []

export const fetchProducts = createAsyncThunk<Products[]>(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(
            'https://run.mocky.io/v3/84b32432-9d86-4bdd-b97d-db85a4c4dc33'
        )
        return response.data.products
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        sortByPrice: (state) => {
            state.sort((a, b) => a.price - b.price)
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return (state = action.payload)
        })
    },
})

export const { sortByPrice } = productsSlice.actions
export default productsSlice.reducer

// https://run.mocky.io/v3/13d82ed7-56a9-4589-a8b1-8ce783a8f6ed - no watches
