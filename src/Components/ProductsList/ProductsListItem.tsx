import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import './ProductsListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    copacity: string
    price: number
    images: string

    addProductToCart: (countFinal: number, priceFinal: number) => void
}

const ProductsListItem = ({
    title,
    description,
    type,
    copacity,
    price,
    images,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    return (
        <Card variant="outlined">
            <CardContent>
                <div className="product_image">
                    <img
                        className="product_image_content"
                        src={images}
                        alt="image card"
                    />
                </div>
                <h6 className="product_title">{title}</h6>
                <div className="product_desc">{description}</div>
                <div className="product_features">{type}</div>
                <div className="product_features">{copacity} GB</div>

                {/* <div className="color_block">
                    <p>
                        Color:{' '}
                        <span className={this.state.color}>
                            {this.state.color}
                        </span>
                    </p>
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={this.changeColor}
                    >
                        Change color!
                    </Button>
                </div> */}

                <div className="product_quantity">
                    <Button
                        className="button_minus"
                        variant="outlined"
                        size="small"
                        onClick={() => onDecrement()}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField size="small" value={count}></TextField>
                    <Button
                        className="button_plus"
                        variant="outlined"
                        size="small"
                        onClick={() => onIncrement()}
                        disabled={count >= 10}
                    >
                        +
                    </Button>
                </div>
            </CardContent>

            <CardActions className="flex_btn_in_card">
                <div className="product_price">{price * count}$</div>
                <Button
                    onClick={() => addProductToCart(count, count * price)}
                    variant="contained"
                >
                    Add to cart!
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
