import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArrey from 'Utils/ProductsArrey'
import { useState } from 'react'
import { Button } from '@mui/material'
import './ProductsList.scss'
import AppsIcon from '@mui/icons-material/Apps'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
type Props = {}

const ProductsList = (props: Props) => {
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
