import ProductsList from 'Components/ProductsList/ProductsList'
import './home.scss'
import Reviews from 'Components/Reviews/Reviews'
import SimpleSlider from 'Components/SliderInfo/SliderInfo'
import Favorites from './Favorites/Favorites'
import HoverAbout from './HoverAbout/HoverAbout'

type Props = {}

const Home = (props: Props) => {
    return (
        <div className="HomePage">
            <SimpleSlider />
            <HoverAbout />
            <Favorites />
            <ProductsList />
            <Reviews />
        </div>
    )
}
export default Home
