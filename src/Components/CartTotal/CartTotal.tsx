import { getProductsObject, Products } from 'Utils/ProductsArrey'
import './CartTotal.scss'
import { useAppSelector } from 'redux/hooks'

type ProductsObject = {
    [id: number]: Products
}

type Props = {
    productsInCart: {
        [id: number]: number
    }
}
const CartTotal = ({ productsInCart }: Props) => {
    const productsArrey = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(productsArrey)

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
