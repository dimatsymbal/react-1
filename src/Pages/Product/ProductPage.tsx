import { useParams } from 'react-router-dom'
import productsArrey, { getProductsObject, Products } from 'Utils/ProductsArrey'
import './ProductPage.scss'
import Quantity from 'Components/Quantity/Quantity'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import { addProductToCart } from 'redux/cartReducer'
import { Button } from '@mui/material'
import { useState } from 'react'
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp'

type Props = {
    productsObject?: {
        [id: number]: Products
    }
}
const ProductPage = ({
    productsObject = getProductsObject(productsArrey),
}: Props) => {
    const { id } = useParams()

    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    const isLiked = useAppSelector(
        (state) => state.productsLikeState[productsObject[parseInt(id!)].id]
    )

    const [clickCount, setClickCount] = useState(0)
    const handleClick = () => {
        setClickCount(clickCount + 1)
    }
    const dispatch = useAppDispatch()

    return (
        <div className="productPage">
            <div className="container">
                <br />
                <br />
                <div className="row">
                    <div className="col-6">
                        <Button
                            className="likeBtn"
                            variant="outlined"
                            onClick={() =>
                                isLiked
                                    ? dispatch(removeLike(id))
                                    : dispatch(addLike(id))
                            }
                        >
                            {isLiked ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </Button>

                        <div
                            id="carouselExampleDark"
                            className="carousel carousel-dark slide"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        className="productPageImage"
                                        src={
                                            productsObject[parseInt(id!)].images
                                        }
                                        alt="productPageImage"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="productPageImage"
                                        src={
                                            productsObject[parseInt(id!)]
                                                .extraPhoto
                                        }
                                        alt="productPageImage"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="productPageImage"
                                        src={
                                            productsObject[parseInt(id!)]
                                                .extraPhoto2
                                        }
                                        alt="productPageImage"
                                    />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                    Previous
                                </span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-6" id="jbsafjkabsjkf">
                        <h4>{productsObject[parseInt(id!)].title}</h4>
                        <h6>{productsObject[parseInt(id!)].type}</h6>

                        <p className="paragraph1">
                            {productsObject[parseInt(id!)].description}
                        </p>

                        <p>{productsObject[parseInt(id!)].copacity}</p>

                        <p>{productsObject[parseInt(id!)].extraDesc2}</p>

                        <p>{productsObject[parseInt(id!)].extraDesc}</p>

                        <Quantity
                            onDecrement={onDecrement}
                            onIncrement={onIncrement}
                            count={count}
                            quantity={productsObject[parseInt(id!)].quantity}
                        />

                        <div className="flex_btn_in_card">
                            {productsObject[parseInt(id!)].quantity <= 3 ? (
                                <>
                                    <h5 className="product_old_price">
                                        {productsObject[parseInt(id!)].price *
                                            count}
                                        $
                                    </h5>
                                    <h5 className="product_discount_price">
                                        {productsObject[parseInt(id!)].price *
                                            count *
                                            0.8}
                                        $
                                    </h5>
                                </>
                            ) : (
                                <h5 className="product_price">
                                    {productsObject[parseInt(id!)].price *
                                        count}
                                    $
                                </h5>
                            )}

                            <Button
                                disabled={
                                    clickCount >=
                                    productsObject[parseInt(id!)].quantity
                                }
                                className="add_to_cart_btn"
                                onClick={() => {
                                    handleClick()
                                    dispatch(addProductToCart({ id, count }))
                                }}
                                variant="contained"
                            >
                                Add to cart!
                                <AddShoppingCartSharpIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductPage
