import { useParams } from 'react-router-dom'
import productsArrey, { getProductsObject, Products } from 'Utils/ProductsArrey'

type Props = {
    productsObject?: {
        [id: number]: Products
    }
}
const ProductPage = ({
    productsObject = getProductsObject(productsArrey),
}: Props) => {
    const { id } = useParams()

    return <div>{productsObject[parseInt(id!)].title}</div>
}
export default ProductPage
