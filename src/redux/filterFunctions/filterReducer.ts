import { createSlice } from '@reduxjs/toolkit'

type filterType = {
    sortBtnName: string
}

const initialState: filterType = {
    sortBtnName: 'Телефон',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterByPhones: (state) => {
            state.sortBtnName = 'Телефон'
        },
        filterByHeadphones: (state) => {
            state.sortBtnName = 'Навушники'
        },
        filterByLaptops: (state) => {
            state.sortBtnName = 'Ноутбук'
        },
        filterByPlayStations: (state) => {
            state.sortBtnName = 'Ігровa консоль'
        },
        filterByTV: (state) => {
            state.sortBtnName = 'Телевізори'
        },
        filterByWatches: (state) => {
            state.sortBtnName = 'Годинник'
        },
    },
})

export const {
    filterByPhones,
    filterByHeadphones,
    filterByLaptops,
    filterByPlayStations,
    filterByTV,
    filterByWatches,
} = filterSlice.actions

export default filterSlice.reducer
