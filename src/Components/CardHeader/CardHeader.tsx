import CartTotal from 'Components/CartTotal/CartTotal'
import CartProductList from 'Components/CartProductList/CartProductList'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CardHeader = ({ productsInCart }: Props) => {
    return (
        <div>
            {/* <CartProductList productsInCart={productsInCart} /> */}
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CardHeader
