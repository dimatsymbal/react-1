import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductsListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    copacity: string
    price: number
    images: string
}

const ProductsListItem = (props: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="product_image">
                    <img
                        className="product_image_content"
                        src={props.images}
                        alt="image card"
                    />
                </div>
                <h6 className="product_title">{props.title}</h6>
                <div className="product_desc">{props.description}</div>
                <div className="product_features">{props.type}</div>
                <div className="product_features">{props.copacity}</div>
                <div className="product_price">{props.price}</div>

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
export default ProductsListItem
