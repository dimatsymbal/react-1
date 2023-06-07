import { Products } from 'Utils/ProductsArrey'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom'
import './FavoriteItem.scss'
import PercentIcon from '@mui/icons-material/Percent'
import { removeLike } from 'redux/likeReducer'
import { useAppDispatch } from 'redux/hooks'

type Props = {
    product: Products
}
const FavoriteItem = ({ product }: Props) => {
    const dispatch = useAppDispatch()

    return (
        <>
            <Card className="favoriteCard" variant="outlined">
                <CardContent
                    className="favoriteCardContent"
                    style={{ padding: '0px' }}
                >
                    {product.quantity <= 3 && (
                        <div className="saleCircle">
                            <PercentIcon className="PercentIcon" />
                            <span>Only {product.quantity} left</span>
                        </div>
                    )}
                    <div className="imgDiv">
                        <img
                            className="favoriteCardImg"
                            src={product.images}
                            alt="favoriteCardImg"
                        />
                    </div>
                    <Link
                        className="favoriteTitle"
                        to={`/products/${product.id}`}
                    >
                        {product.title}
                    </Link>{' '}
                    <p className="favoritePrice">{product.price}$</p>
                </CardContent>

                <Button
                    onClick={() => dispatch(removeLike(product.id))}
                    className="deteleFavoriteCard"
                >
                    <DeleteIcon />
                </Button>
            </Card>
        </>
    )
}
export default FavoriteItem
