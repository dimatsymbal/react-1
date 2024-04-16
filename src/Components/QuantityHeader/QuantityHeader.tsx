import { useAppSelector } from 'redux/hooks'
import './QuantityHeader.scss'
const QuantityHeader = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    let cartItemsCount = 0

    for (let key in productsInCart) {
        cartItemsCount = cartItemsCount + productsInCart[key]
    }

    return cartItemsCount === 0 ? (
        <p className="isEmptyPatagraph"></p>
    ) : (
        <div className="quantityCircle">{cartItemsCount}</div>
    )
}
export default QuantityHeader
