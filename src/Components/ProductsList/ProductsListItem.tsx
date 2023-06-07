import { Button, Card, CardActions, CardContent } from '@mui/material'
import { useState } from 'react'
import './ProductsListItem.scss'
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp'
import Quantity from 'Components/Quantity/Quantity'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import { addProductToCart } from 'redux/cartReducer'
import { Link } from 'react-router-dom'
import PercentIcon from '@mui/icons-material/Percent'

type Props = {
    id: number
    title: string
    description: string
    type: string
    copacity: string
    price: number
    images: string
    quantity: number
}

const ProductsListItem = ({
    id,
    title,
    description,
    type,
    copacity,
    price,
    images,
    quantity,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()

    const [clickCount, setClickCount] = useState(0)
    const handleClick = () => {
        setClickCount(clickCount + 1)
    }

    return (
        <Card
            className={quantity === 0 ? 'outOfStock' : 'ProductsListItem'}
            variant="outlined"
        >
            <CardContent>
                <Button
                    onClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }
                >
                    {isLiked ? (
                        <FavoriteIcon
                            style={{
                                color: 'rgb(221, 84, 84)',
                            }}
                        />
                    ) : (
                        <FavoriteBorderIcon
                            style={{
                                color: 'rgb(221, 84, 84)',
                            }}
                        />
                    )}
                </Button>
                {quantity <= 3 && (
                    <div className="saleCircle">
                        <PercentIcon /> Only {quantity} left
                    </div>
                )}
                <div
                    className="product_image"
                    onDoubleClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }
                >
                    <img
                        className="product_image_content"
                        src={images}
                        alt="product_image_content card"
                    />
                </div>
                <Link to={`/products/${id}`}>
                    <h6 className="product_title">{title}</h6>
                </Link>
                <div className="product_desc">{description}</div>
                <div className="product_type">{type}</div>
                <div className="product_features">{copacity} GB</div>
                {quantity === 0 ? (
                    <Quantity
                        onDecrement={onDecrement}
                        onIncrement={onIncrement}
                        count={0}
                        quantity={quantity}
                    />
                ) : (
                    <Quantity
                        onDecrement={onDecrement}
                        onIncrement={onIncrement}
                        count={count}
                        quantity={quantity}
                    />
                )}
            </CardContent>

            <CardActions className="flex_btn_in_card">
                {quantity === 0 ? (
                    <p>Товара нема</p>
                ) : quantity <= 3 ? (
                    <>
                        <h4 className="product_old_price">{price * count}$</h4>
                        <h4 className="product_discount_price">
                            {price * count * 0.8}$
                        </h4>
                    </>
                ) : (
                    <h4 className="product_price">{price * count}$</h4>
                )}
                <Button
                    disabled={clickCount >= quantity}
                    className="add_to_cart_btn"
                    onClick={() => {
                        dispatch(addProductToCart({ id, count }))
                        handleClick()
                    }}
                    variant="contained"
                >
                    Add to cart!
                    <AddShoppingCartSharpIcon />
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
