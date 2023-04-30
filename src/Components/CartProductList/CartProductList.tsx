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
                    <img
                        src="https://xl-static.rozetka.com.ua/assets/img/design/modal-cart-dummy.svg"
                        alt="emptyCartImg"
                    />

                    <h5>Кошик порожній</h5>
                    <p>Але це ніколи не пізно виправити :)</p>
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
