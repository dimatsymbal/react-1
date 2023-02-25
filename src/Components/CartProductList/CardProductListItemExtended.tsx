import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    TextField,
} from '@mui/material'
import './CardProductListItemExtended.css'
import { Products } from 'Utils/ProductsArrey'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useState } from 'react'
type Props = {
    product: Products
    productCount: number

    deleteProductFromCart: (countFinal: number, priceFinal: number) => void
}

const CartProductListItemExtended = ({
    product,
    productCount,
    deleteProductFromCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    return (
        <Grid item xs={12} sm={4}>
            <Card className="card_cartpage">
                <CardContent>
                    <div className="product-image">
                        <img
                            className="skajnf3j2n42j3n4m3nj4n2j42n34jn5j3"
                            src={product.images}
                            alt="cartimg"
                        />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <p>For all: {product.price * productCount}</p>

                    <div className="product_quantity">
                        <Button
                            className="button_minus"
                            variant="outlined"
                            size="small"
                            onClick={() => onDecrement()}
                            disabled={count <= 1}
                        >
                            <RemoveIcon />
                        </Button>
                        <TextField size="small" value={count}></TextField>
                        <Button
                            className="button_plus"
                            variant="outlined"
                            size="small"
                            onClick={() => onIncrement()}
                            disabled={count >= productCount}
                        >
                            <AddIcon />
                        </Button>
                    </div>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        onClick={() => deleteProductFromCart(product.id, count)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
