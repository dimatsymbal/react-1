import { Grid, Typography } from '@mui/material'
import CartTotal from 'Components/CartTotal/CartTotal'
import CartProductListItemExtended from 'Components/CartProductList/CardProductListItemExtended'
import CartProductList from 'Components/CartProductList/CartProductList'
type Props = {
    productsInCart: {
        [id: number]: number
    }

    deleteProductFromCart: (countFinal: number, priceFinal: number) => void
}
const CartPage = ({ productsInCart, deleteProductFromCart }: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    marginBottom: '50px',
                    marginTop: '100px',
                }}
            >
                Cart List
            </Typography>

            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    deleteProductFromCart={deleteProductFromCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}
export default CartPage
