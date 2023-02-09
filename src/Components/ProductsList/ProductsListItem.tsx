import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { Component } from 'react'
import './ProductsListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    copacity: string
    price: number
    images: string
}

class ProductsListItem extends Component<Props> {
    render() {
        const { title, description, type, copacity, price, images } = this.props
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
                    <div className="product_price">{price}$</div>

                    <div className="product_quantity">
                        <Button
                            className="button_plus"
                            variant="outlined"
                            size="small"
                        >
                            -
                        </Button>
                        <TextField size="small" value="1"></TextField>
                        <Button
                            className="button_minus"
                            variant="outlined"
                            size="small"
                        >
                            +
                        </Button>
                    </div>
                </CardContent>

                <CardActions className="flex_btn_in_card">
                    <Button variant="outlined">Add to cart!</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductsListItem
