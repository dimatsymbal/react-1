import productsArray, { getProductsObject, Products } from 'Utils/ProductsArrey'
import CardProductListItem from './CardProductListItem'
import './CartProductList.scss'
type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Products
    }

    CartItem?: any
}

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CardProductListItem,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).length === 0 ? (
                <div className="divForEmptyCartMessage">
                    <h2 className="emptyCartMessage">Cart is empty</h2>
                </div>
            ) : (
                Object.keys(productsInCart).map((productId) => (
                    <CartItem
                        key={productId}
                        product={productsObject[parseInt(productId)]}
                        productCount={productsInCart[parseInt(productId)]}
                    />
                ))
            )}
        </>
    )
}
export default CartProductList
