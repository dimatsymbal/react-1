import ProductsList from 'Components/ProductsList/ProductsList'
import './home.scss'
import Reviews from 'Components/Reviews/Reviews'
import SimpleSlider from 'Components/SliderInfo/SliderInfo'
import Favorites from './Favorites/Favorites'
import HoverAbout from './HoverAbout/HoverAbout'
import Recommends from './Recommends/Recommends'
import TopRated from './TopRated/TopRated'

type Props = {}

const Home = (props: Props) => {
    return (
        <div className="HomePage">
            <SimpleSlider />
            <HoverAbout />
            <div className="fullWidthComponent">
                <Recommends />
            </div>
            <Favorites />
            <TopRated />
            <ProductsList />
            <Reviews />
        </div>
    )
}
export default Home
