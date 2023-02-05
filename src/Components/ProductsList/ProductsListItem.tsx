import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'
type Props = {}

const ProductsListItem = (props: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="product_title">Iphone 14 pro</div>
                <div className="product_desc">Desc Iphone 14 pro</div>
                <div className="product_features">Type: phone</div>
                <div className="product_features">Copacity: 256 gb</div>
                <div className="product_price">1200$</div>
            </CardContent>

            <CardActions className="flex_btn_in_card">
                <Button variant="outlined">Add to cart!</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
