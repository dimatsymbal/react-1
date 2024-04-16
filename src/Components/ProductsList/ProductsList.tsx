import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import './ProductsList.scss'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import LaptopIcon from '@mui/icons-material/Laptop'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import TvIcon from '@mui/icons-material/Tv'

import WatchIcon from '@mui/icons-material/Watch'
import {
    filterByHeadphones,
    filterByLaptops,
    filterByPhones,
    filterByPlayStations,
    filterByTV,
    filterByWatches,
} from 'redux/filterFunctions/filterReducer'

type Props = {}

const ProductsList = (props: Props) => {
    const productsArrey = useAppSelector((state) => state.products) // приймаэмо масив з сховища

    const filtertBtnName = useAppSelector(
        (state) => state.filter.filtertBtnName
    )

    const dispatch = useAppDispatch()

    // -----------------------------------------------------------------------------

    return (
        <div className="ProductsList" id="ProductsList">
            <div className="filterPanel">
                <div className="filter_btns_block">
                    <Grid container spacing={5}>
                        <Grid item>
                            <button
                                className="filterBtns"
                                onClick={() => dispatch(filterByPhones())}
                            >
                                <PhoneIphoneIcon />
                                Phones
                            </button>
                        </Grid>
                        <Grid item>
                            <button
                                className="filterBtns"
                                onClick={() => dispatch(filterByHeadphones())}
                            >
                                <HeadphonesIcon />
                                Headphones
                            </button>
                        </Grid>
                        <Grid item>
                            <button
                                className="filterBtns"
                                onClick={() => dispatch(filterByLaptops())}
                            >
                                <LaptopIcon />
                                Laptops
                            </button>
                        </Grid>
                        <Grid item>
                            <button
                                className="filterBtns"
                                onClick={() => dispatch(filterByPlayStations())}
                            >
                                <SportsEsportsIcon />
                                Gaming
                            </button>
                        </Grid>
                        <Grid item>
                            <button
                                className="filterBtns"
                                onClick={() => dispatch(filterByTV())}
                            >
                                <TvIcon />
                                TV
                            </button>
                        </Grid>

                        <Grid item>
                            <button
                                className="filterBtns"
                                onClick={() => dispatch(filterByWatches())}
                            >
                                <WatchIcon />
                                Watches
                            </button>
                        </Grid>
                    </Grid>
                </div>
            </div>

            {/* <div className="sortPanel">
                <div className="dropdown">
                    <button
                        className="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Sort by...
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <button className="sortBtns">Lowest price</button>
                        </li>
                        <li>
                            <button className="sortBtns">Most expensive</button>
                        </li>
                    </ul>
                </div>
            </div> */}

            <Grid container spacing={3}>
                {productsArrey
                    .slice()
                    .filter((product) => product.type === filtertBtnName)
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
                            .filter(
                                (product) => product.type === filtertBtnName
                            )
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
