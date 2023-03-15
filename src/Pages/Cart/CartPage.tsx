import { Grid, Typography } from '@mui/material'
import CartTotal from 'Components/CartTotal/CartTotal'
import CartProductListItemExtended from 'Components/CartProductList/CardProductListItemExtended'
import CartProductList from 'Components/CartProductList/CartProductList'
type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
    addProductQuantity: (id: number) => void
    removeProductQuantity: (id: number) => void
}
const CartPage = ({
    productsInCart,
    removeProductFromCart,
    addProductQuantity,
    removeProductQuantity,
}: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h2"
                align="center"
                sx={{ marginTop: '60px', marginBottom: '60px' }}
            >
                Cart List
            </Typography>

            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    addProductQuantity={addProductQuantity}
                    removeProductQuantity={removeProductQuantity}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}
export default CartPage
