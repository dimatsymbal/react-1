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
            <div>
                {/* <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    sx={{ marginTop: '60px', marginBottom: '60px' }}
                >
                    Total:
                </Typography> */}
                total:
                {Object.keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsInCart[parseInt(productId)] *
                            productsObject[parseInt(productId)].price,
                    0
                )}
                $
            </div>
        </div>
    )
}
export default CartTotal
