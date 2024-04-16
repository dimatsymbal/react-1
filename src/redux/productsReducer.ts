import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export type Products = {
    id: number
    title: string
    description: string
    type: string
    copacity: string
    price: number
    images: string
    quantity: number
    extraDesc?: string
    extraDesc2?: string
    extraPhoto?: string
    extraPhoto2?: string
    category?: string
}

const initialState: Products[] = []

export const fetchProducts = createAsyncThunk<Products[]>(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(
            'https://run.mocky.io/v3/98a0964e-6f61-4cc4-b5cc-dba4f0368039'
        )

        console.log('response.data.products', response.data.products)
        return response.data.products
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return (state = action.payload)
        })
    },
})

export default productsSlice.reducer

// https://run.mocky.io/v3/13d82ed7-56a9-4589-a8b1-8ce783a8f6ed - no watches

// https://run.mocky.io/v3/84b32432-9d86-4bdd-b97d-db85a4c4dc33 - + watches
