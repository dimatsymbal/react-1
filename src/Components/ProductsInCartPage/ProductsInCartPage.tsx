// import {
//     Button,
//     Card,
//     CardActions,
//     CardContent,
//     TextField,
// } from '@mui/material'
// import { Grid } from '@mui/material'
import CartTotal from 'Components/CartTotal/CartTotal'
import CartProductList from 'Components/CartProductList/CartProductList'

import './ProductsInCartPage.scss'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const ProductsInCartPage = ({ productsInCart }: Props) => {
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default ProductsInCartPage
