type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CardHeader = ({ productsInCart }: Props) => {
    console.log(Object.keys(productsInCart))
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productId} : {productsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CardHeader
