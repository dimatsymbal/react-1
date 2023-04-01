import ProductsList from 'Components/ProductsList/ProductsList'
import './home.scss'
import Reviews from 'Components/Reviews/Reviews'

type Props = {}

const Home = (props: Props) => {
    return (
        <div className="HomePage">
            <ProductsList />
            <Reviews />
        </div>
    )
}
export default Home
