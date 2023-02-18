import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { Grid } from '@mui/material'
import productsArray, { getProductsObject, Products } from 'Utils/ProductsArrey'

import './ProductsInCartPage.scss'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Products
    }
}

const ProductsInCartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <Grid
            container
            rowSpacing={3}
            columnSpacing={3}
            className="CartPageContent"
        >
            {Object.keys(productsInCart).map((productId) => (
                <Grid item xs={3} key={productId}>
                    <Card className="ProductCardInCartPage">
                        <h5>{productsObject[parseInt(productId)].title}</h5>
                        <p className="Card_description">
                            {productsObject[parseInt(productId)].description}{' '}
                        </p>
                        <div className="card_info">
                            <p>
                                Type: {productsObject[parseInt(productId)].type}{' '}
                            </p>
                            <p>
                                Copacity:{' '}
                                {productsObject[parseInt(productId)].copacity}{' '}
                            </p>
                            <p>
                                Quantity: {productsInCart[parseInt(productId)]}
                            </p>
                        </div>

                        <div className="down_block_of_card">
                            <p>
                                Price:{' '}
                                {productsObject[parseInt(productId)].price}${' '}
                            </p>
                        </div>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
export default ProductsInCartPage
