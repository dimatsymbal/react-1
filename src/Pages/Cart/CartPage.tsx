import { Grid, Typography } from '@mui/material'
import ProductsInCartPage from 'Components/ProductsInCartPage/ProductsInCartPage'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}
const CartPage = ({ productsInCart }: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    marginTop: '100px',
                }}
            >
                Cart List
                <ProductsInCartPage productsInCart={productsInCart} />
            </Typography>
        </>
    )
}
export default CartPage
