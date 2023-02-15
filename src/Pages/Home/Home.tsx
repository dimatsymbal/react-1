import ProductsList from 'Components/ProductsList/ProductsList'
import ProductsListItem from 'Components/ProductsList/ProductsListItem'
import './home.scss'

type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
}

const Home = ({ cartData }: Props) => {
    return (
        <div className="main">
            <ProductsList />
            {/* <ProductsList cartData={{ cartData }} /> */}
            {/* <ProductsListItem /> */}
        </div>
    )
}
export default Home
