import productsArray, { getProductsObject, Products } from 'Utils/ProductsArrey'
import CardProductListItem from './CardProductListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Products
    }

    CartItem?: any

    removeProductFromCart?: (id: number) => void
}

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CardProductListItem,
    removeProductFromCart,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                    removeProductFromCart={removeProductFromCart}
                />
            ))}
        </>
    )
}
export default CartProductList
