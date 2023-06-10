import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import { useState } from 'react'
import './ProductsList.scss'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { sortByPrice } from 'redux/productsReducer'

import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import LaptopIcon from '@mui/icons-material/Laptop'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import TvIcon from '@mui/icons-material/Tv'

type Props = {}

const ProductsList = (props: Props) => {
    const productsArrey = useAppSelector((state) => state.products) // приймаэмо масив з сховища

    const dispatch = useAppDispatch()

    const [sortBtnName, setSortBtnName] = useState<string>('Телефон')

    const changeSortBtnByPhones = () => {
        setSortBtnName(() => 'Телефон')
    }

    const changeSortBtnByHeadphones = () => {
        setSortBtnName(() => 'Навушники')
    }

    const changeSortBtnByLaptops = () => {
        setSortBtnName(() => 'Ноутбук')
    }

    const changeSortBtnByPlayStations = () => {
        setSortBtnName(() => 'Ігровa консоль')
    }

    const changeSortBtnByTV = () => {
        setSortBtnName(() => 'Телевізори')
    }

    const { category } = useParams()

    useEffect(() => {
        if (category === 'headphones') {
            setSortBtnName('Навушники')
        } else if (category === 'laptops') {
            setSortBtnName('Ноутбук')
        }
    }, [category])

    return (
        <div className="ProductsList">
            <br />

            <div className="filterPanel">
                <div className="filter_btns_block">
                    <Grid container spacing={5}>
                        <Grid item>
                            <button
                                className="filterBtns"
                                onClick={changeSortBtnByPhones}
                            >
                                <PhoneIphoneIcon />
                                Phones
                            </button>
                        </Grid>
                        <Grid item>
                            <button
                                className="filterBtns"
                                onClick={changeSortBtnByHeadphones}
                            >
                                <HeadphonesIcon />
                                Headphones
                            </button>
                        </Grid>
                        <Grid item>
                            <button
                                className="filterBtns"
                                onClick={changeSortBtnByLaptops}
                            >
                                <LaptopIcon />
                                Laptops
                            </button>
                        </Grid>
                        <Grid item>
                            <button
                                className="filterBtns"
                                onClick={changeSortBtnByPlayStations}
                            >
                                <SportsEsportsIcon />
                                Gaming
                            </button>
                        </Grid>
                        <Grid item>
                            <button
                                className="filterBtns"
                                onClick={changeSortBtnByTV}
                            >
                                <TvIcon />
                                TV
                            </button>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <br />
            <br />

            <button onClick={() => dispatch(sortByPrice())}>
                sort by price
            </button>

            <br />
            <br />

            <Grid container spacing={3}>
                {productsArrey
                    .filter((product) => product.type === sortBtnName)
                    .filter((product) => product.quantity > 0)
                    .map(
                        ({
                            id,
                            title,
                            description,
                            type,
                            copacity,
                            price,
                            images,
                            quantity,
                        }) => (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                {' '}
                                <ProductsListItem
                                    id={id}
                                    images={images}
                                    title={title}
                                    description={description}
                                    type={type}
                                    copacity={copacity}
                                    price={price}
                                    quantity={quantity}
                                />
                            </Grid>
                        )
                    )
                    .concat(
                        productsArrey
                            .filter((product) => product.type === sortBtnName)
                            .filter((product) => product.quantity === 0)
                            .map(
                                ({
                                    id,
                                    title,
                                    description,
                                    type,
                                    copacity,
                                    price,
                                    images,
                                    quantity,
                                }) => (
                                    <Grid item xs={12} sm={6} md={4} key={id}>
                                        {' '}
                                        <ProductsListItem
                                            id={id}
                                            images={images}
                                            title={title}
                                            description={description}
                                            type={type}
                                            copacity={copacity}
                                            price={price}
                                            quantity={quantity}
                                        />
                                    </Grid>
                                )
                            )
                    )}
            </Grid>
        </div>
    )
}
export default ProductsList
