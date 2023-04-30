import productsArray, { getProductsObject, Products } from 'Utils/ProductsArrey'
type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Products
    }
}
const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            Total:
            {Object.keys(productsInCart).reduce((total, productId) => {
                const productPrice = productsObject[parseInt(productId)].price
                const quantity = productsObject[parseInt(productId)].quantity
                const productQuantity = productsInCart[parseInt(productId)]

                if (quantity <= 3) {
                    return total + productQuantity * productPrice * 0.8
                } else {
                    return total + productPrice * productQuantity
                }
            }, 0)}
            $
        </div>
    )
}
export default CartTotal

{
    /* <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    sx={{ marginTop: '60px', marginBottom: '60px' }}
                >
                    Total:
                </Typography> */
}

{
    /* <div>
            total:
            {Object.keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsInCart[parseInt(productId)] *
                        productsObject[parseInt(productId)].price,
                0
            )}
            $
        </div> */
}
