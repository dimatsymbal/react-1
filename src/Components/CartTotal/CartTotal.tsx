import productsArray, { getProductsObject, Products } from 'Utils/ProductsArrey'
import './CartTotal.scss'
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
    let total = 0

    //productsInCart - це обект
    //Object.keys(productsInCart) - масив ключів, відповідно можемо використати форІч
    //форІч - для перебору масиву елементів у корзині і сумірованія іхніх цін

    Object.keys(productsInCart).forEach((productId) => {
        const productPrice = productsObject[parseInt(productId)].price //ціна товару
        const quantity = productsObject[parseInt(productId)].quantity //його загальна кількість на складі нам треба для перевірки на акцію
        const productQuantity = productsInCart[parseInt(productId)] //кількість товарів яку обрав користувач і додав в карзину

        //перевірка на акційну ціну
        if (quantity <= 3) {
            total = total + productQuantity * productPrice * 0.8
        } else {
            total = total + productPrice * productQuantity //тотал = тотал(спочатку він = 0) + ціна * кількість
        }
    })

    return (
        <>
            <div>
                <h3 className="cartTotalPrice">Total: {total} $</h3>
            </div>
        </>
    )
}
export default CartTotal
