import FavoriteItem from './FavoriteItem/FavoriteItem'
import { Grid } from '@mui/material'
import './Favorites.scss'
import productsArrey, { Products, getProductsObject } from 'Utils/ProductsArrey'

type Props = {
    productsInFav: {
        [id: number]: boolean
    }
    productsObject?: {
        [id: number]: Products
    }
    deleteProductToFav: (id: number) => void
}
const Favorites = ({
    productsInFav,
    productsObject = getProductsObject(productsArrey),
    deleteProductToFav,
}: Props) => {
    // console.log(Object.keys(productsInFav)) // це наш масив ключів у стрінг

    return (
        <div className="Favorites">
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
                Favorites
            </h2>

            {Object.keys(productsInFav).length === 0 ? (
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
                    {Object.keys(productsInFav).map((itemId) => (
                        <Grid item xs={6} sm={4} md={2} key={itemId}>
                            <FavoriteItem
                                deleteProductToFav={deleteProductToFav}
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
