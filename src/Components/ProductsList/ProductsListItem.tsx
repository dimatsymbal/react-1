import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { Component } from 'react'
import './ProductsListItem.scss'

type State = {
    count: number
}

type Props = {
    title: string
    description: string
    type: string
    copacity: string
    price: number
    images: string
}

class ProductsListItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            count: 1,
        }
        this.onIncrementClick = this.onIncrementClick.bind(this)
    }

    onIncrementClick() {
        this.setState({
            count: 2,
        })
    }

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
                            className="button_minus"
                            variant="outlined"
                            size="small"
                        >
                            -
                        </Button>
                        <TextField
                            size="small"
                            value={this.state.count}
                        ></TextField>
                        <Button
                            className="button_plus"
                            variant="outlined"
                            size="small"
                            onClick={this.onIncrementClick}
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
