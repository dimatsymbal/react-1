import { createSlice } from '@reduxjs/toolkit'

type filterType = {
    filtertBtnName: string
}

const initialState: filterType = {
    filtertBtnName: 'Телефон',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterByPhones: (state) => {
            state.filtertBtnName = 'Телефон'
        },
        filterByHeadphones: (state) => {
            state.filtertBtnName = 'Навушники'
        },
        filterByLaptops: (state) => {
            state.filtertBtnName = 'Ноутбук'
        },
        filterByPlayStations: (state) => {
            state.filtertBtnName = 'Ігровa консоль'
        },
        filterByTV: (state) => {
            state.filtertBtnName = 'Телевізори'
        },
        filterByWatches: (state) => {
            state.filtertBtnName = 'Годинник'
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
