import ProductsList from 'Components/ProductsList/ProductsList'
import './home.scss'
import Reviews from 'Components/Reviews/Reviews'
import SimpleSlider from 'Components/SliderInfo/SliderInfo'
type Props = {}

const Home = (props: Props) => {
    return (
        <div className="HomePage">
            <SimpleSlider />
            <ProductsList />
            <Reviews />
        </div>
    )
}
export default Home
