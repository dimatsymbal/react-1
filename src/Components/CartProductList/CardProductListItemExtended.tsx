import { Button, Card, CardActions, CardContent, Grid } from '@mui/material'
import './CardProductListItemExtended.scss'
import { Products } from 'Utils/ProductsArrey'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'Components/Quantity/Quantity'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Link } from 'react-router-dom'
import {
    addProductQuantity,
    removeProductFromCart,
    removeProductQuantity,
} from 'redux/cartReducer'

type Props = {
    product: Products
    productCount: number
    quantity: number
}

const CartProductListItemExtended = ({
    product,
    productCount,
    quantity,
}: Props) => {
    const isLiked = useAppSelector(
        (state) => state.productsLikeState[product.id]
    )

    const dispatch = useAppDispatch()

    return (
        <Grid item xs={12} sm={4}>
            <Card className="cartProductsListItem" variant="outlined">
                <CardContent>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            isLiked
                                ? dispatch(removeLike(product.id))
                                : dispatch(addLike(product.id))
                        }
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <div className="product_image">
                        <img
                            className="product_image_content"
                            src={product.images}
                            alt="product_image_content card"
                        />
                    </div>
                    <h6 className="product_title">
                        {' '}
                        <Link to={`/products/${product.id}`}>
                            {product.title}
                        </Link>{' '}
                    </h6>
                    <div className="product_desc">{product.description}</div>
                    <div className="product_type">{product.type}</div>
                    <div className="product_features">
                        {product.copacity} GB
                    </div>

                    <Quantity
                        // ПЕРЕВІРКА НА ВИДАЛЕННЯ КАРТОЧКИ
                        count={productCount}
                        onDecrement={() =>
                            productCount <= 1
                                ? dispatch(removeProductFromCart(product.id))
                                : dispatch(
                                      removeProductQuantity({ id: product.id })
                                  )
                        }
                        onIncrement={() =>
                            dispatch(addProductQuantity({ id: product.id }))
                        }
                        minCount={0}
                        quantity={product.quantity}
                    />
                </CardContent>

                <CardActions className="card_actions">
                    <Button
                        variant="contained"
                        onClick={() =>
                            dispatch(removeProductFromCart(product.id))
                        } //пишимо стрілкову функцію, пов'язано з параметрами. Відбувається зациклення
                        // Викликаємо тоді коли наша функція має параметри (айді), то ми викликаємо її через стрілкову функцію в онкліку
                    >
                        <DeleteIcon />
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
