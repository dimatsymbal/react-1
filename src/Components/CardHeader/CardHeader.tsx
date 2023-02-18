import productsArray, { getProductsObject, Products } from 'Utils/ProductsArrey'
type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Products
    }
}

const CardHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    console.log(Object.keys(productsInCart))
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[parseInt(productId)].title} :{' '}
                    {productsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CardHeader
