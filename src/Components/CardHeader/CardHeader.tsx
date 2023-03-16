import CartTotal from 'Components/CartTotal/CartTotal'
import CartProductList from 'Components/CartProductList/CartProductList'
import { useAppSelector } from 'redux/hooks'

const CardHeader = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    return (
        <div>
            {/* <CartProductList productsInCart={productsInCart} /> */}
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CardHeader
