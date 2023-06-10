import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Products } from 'Utils/ProductsArrey'
import axios from 'axios'

const initialState: Products[] = []

export const fetchProducts = createAsyncThunk<Products[]>(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(
            'https://run.mocky.io/v3/13d82ed7-56a9-4589-a8b1-8ce783a8f6ed'
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

// 'https://run.mocky.io/v3/598625f3-f504-4b4f-88c0-68c651404a13'

// NO WORK - https://run.mocky.io/v3/523f53c9-b27e-4086-9719-24cd2908276a
