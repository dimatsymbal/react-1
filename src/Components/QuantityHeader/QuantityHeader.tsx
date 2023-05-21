import { useAppSelector } from 'redux/hooks'
import './QuantityHeader.scss'
const QuantityHeader = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    const cartItemsCount = Object.values(productsInCart).reduce(
        (a, b) => a + b,
        0
    )

    return cartItemsCount === 0 ? (
        <p className="isEmptyPatagraph"></p>
    ) : (
        <div className="quantityCircle">{cartItemsCount}</div>
    )
}
export default QuantityHeader
