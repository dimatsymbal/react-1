import FavoriteItem from './FavoriteItem/FavoriteItem'
import { Grid } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
import './Favorites.scss'
import { Products, getProductsObject } from 'Utils/ProductsArrey'

type ProductsObject = {
    [id: number]: Products
}

type Props = {
    productsObject?: {
        [id: number]: Products
    }
}
const Favorites = (props: Props) => {
    // console.log(Object.keys(productsInFav)) // це наш масив ключів у стрінг

    const productsInFavRedux = useAppSelector(
        (state) => state.productsLikeState
    )

    const productsArrey = useAppSelector((state) => state.products) // приймаэмо масив з сховища
    const productsObject: ProductsObject = getProductsObject(productsArrey)

    return (
        <div className="Favorites">
            <h2 className="titleFavorites">Favorites</h2>

            {Object.keys(productsInFavRedux).length === 0 ? (
                <div className="emptyFavorites">
                    <img
                        className="emptyFavoritesImg"
                        src="/images/emptyFavorites.jpg"
                        alt="emptyFavorites"
                    />
                    <h5>Ви нічого не додали в "юлюблене"</h5>
                </div>
            ) : (
                <Grid container spacing={2}>
                    {Object.keys(productsInFavRedux).map((itemId) => (
                        <Grid item xs={6} sm={4} md={2} key={itemId}>
                            <FavoriteItem
                                key={itemId}
                                product={productsObject[parseInt(itemId)]}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    )
}
export default Favorites
