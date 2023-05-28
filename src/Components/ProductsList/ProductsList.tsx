import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArrey from 'Utils/ProductsArrey'
import { useState } from 'react'
import { Button } from '@mui/material'
import './ProductsList.scss'
import AppsIcon from '@mui/icons-material/Apps'
type Props = {}

const ProductsList = (props: Props) => {
    const [rozdilName, setRozdilName] = useState<string>('iPhones List')

    const [sortBtnName, setSortBtnName] = useState<string>('Телефон')

    const changeSortBtnByPhones = () => {
        setSortBtnName(() => 'Телефон')
        setRozdilName(() => 'iPhones List')
    }

    const changeSortBtnByHeadphones = () => {
        setSortBtnName(() => 'Навушники')
        setRozdilName(() => 'AirPods List')
    }

    const changeSortBtnByLaptops = () => {
        setSortBtnName(() => 'Ноутбук')
        setRozdilName(() => 'Laptops List')
    }

    const changeSortBtnByPlayStations = () => {
        setSortBtnName(() => 'Ігровa консоль')
        setRozdilName(() => 'Playstation List')
    }

    const changeSortBtnByTV = () => {
        setSortBtnName(() => 'Телевізори')
        setRozdilName(() => 'TV List')
    }

    return (
        <div className="ProductsList">
            <br />
            <br />

            <div className="filterPanel">
                <div className="filter_btns_block">
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <AppsIcon /> Каталог товарів
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <Button
                                    variant="contained"
                                    onClick={() => changeSortBtnByPhones()}
                                >
                                    Phones
                                </Button>
                            </li>
                            <li>
                                <Button
                                    variant="contained"
                                    onClick={() => changeSortBtnByHeadphones()}
                                >
                                    Headphones
                                </Button>
                            </li>
                            <li>
                                {' '}
                                <Button
                                    variant="contained"
                                    onClick={() => changeSortBtnByLaptops()}
                                >
                                    Laptops
                                </Button>
                            </li>
                            <li>
                                {' '}
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        changeSortBtnByPlayStations()
                                    }
                                >
                                    Playstations
                                </Button>
                            </li>
                            <li>
                                {' '}
                                <Button
                                    variant="contained"
                                    onClick={() => changeSortBtnByTV()}
                                >
                                    TV
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Typography
                variant="h4"
                component="h2"
                align="center"
                sx={{
                    marginTop: '20px',
                    marginBottom: '20px',
                }}
            >
                {rozdilName}
            </Typography>

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
