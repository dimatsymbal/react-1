import { Grid, Typography } from '@mui/material'
import CartTotal from 'Components/CartTotal/CartTotal'
import CartProductListItemExtended from 'Components/CartProductList/CardProductListItemExtended'
import CartProductList from 'Components/CartProductList/CartProductList'
type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
}
const CartPage = ({ productsInCart, removeProductFromCart }: Props) => {
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
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}
export default CartPage
