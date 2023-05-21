import { Grid } from '@mui/material'
import CartTotal from 'Components/CartTotal/CartTotal'
import CartProductListItemExtended from 'Components/CartProductList/CardProductListItemExtended'
import CartProductList from 'Components/CartProductList/CartProductList'
import { useAppSelector } from 'redux/hooks'
import { Link } from 'react-router-dom'
import './CartPage.scss'

type Props = {}
const CartPage = ({}: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    return (
        <>
            <br />
            {/* <div>
                <h3>Кількість товарів у кошику :</h3>
            </div> */}
            <br />

            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <br />
            <br />
            <CartTotal productsInCart={productsInCart} />
            <Link
                className={
                    Object.keys(productsInCart).length === 0
                        ? 'linkDisabled'
                        : 'link'
                }
                to="/checkout"
            >
                <button className="cartOrderBtn">Оформити замовлення</button>
            </Link>
        </>
    )
}
export default CartPage
