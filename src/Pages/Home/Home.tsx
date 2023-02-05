import ProductsList from 'Components/ProductsList/ProductsList'
import ProductsListItem from 'Components/ProductsList/ProductsListItem'

type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            <ProductsList />
            {/* <ProductsListItem /> */}
        </div>
    )
}
export default Home
