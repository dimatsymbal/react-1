import ProductsList from 'Components/ProductsList/ProductsList'
import ProductsListItem from 'Components/ProductsList/ProductsListItem'
import './home.scss'

type Props = {
    addProductToCart: (countFinal: number, priceFinal: number) => void
}

const Home = ({ addProductToCart }: Props) => {
    return (
        <div className="main">
            <ProductsList addProductToCart={addProductToCart} />
        </div>
    )
}
export default Home
