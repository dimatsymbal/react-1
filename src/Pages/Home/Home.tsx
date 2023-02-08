import ProductsList from 'Components/ProductsList/ProductsList'
import ProductsListItem from 'Components/ProductsList/ProductsListItem'
import './home.scss'

type Props = {}

const Home = (props: Props) => {
    return (
        <div className="main">
            <ProductsList />
            {/* <ProductsListItem /> */}
        </div>
    )
}
export default Home
