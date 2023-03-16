import { Grid, Typography } from '@mui/material'
import CartTotal from 'Components/CartTotal/CartTotal'
import CartProductListItemExtended from 'Components/CartProductList/CardProductListItemExtended'
import CartProductList from 'Components/CartProductList/CartProductList'
import { useAppSelector } from 'redux/hooks'
type Props = {}
const CartPage = ({}: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

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
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}
export default CartPage
