import ProductsList from 'Components/ProductsList/ProductsList'
import './home.scss'
import Reviews from 'Components/Reviews/Reviews'
import SimpleSlider from 'Components/SliderInfo/SliderInfo'
import Favorites from './Favorites/Favorites'
import HoverAbout from './HoverAbout/HoverAbout'
import Recommends from './Recommends/Recommends'
import TopRated from './TopRated/TopRated'
import FeelTheSound from './FeelTheSound/FeelTheSound'
import { Container } from '@mui/material'
import DiscountInputs from './DiscountInputs/DiscountInputs'

type Props = {}

const Home = (props: Props) => {
    return (
        <div className="HomePage">
            <Container sx={{ padding: '20px 0' }}>
                <SimpleSlider />
                <HoverAbout />
            </Container>
            <Recommends />
            <Container sx={{ padding: '20px 0' }}>
                <Favorites />
            </Container>
            <TopRated />
            <FeelTheSound />
            <Container sx={{ padding: '20px 0' }}>
                <ProductsList />
            </Container>
            <DiscountInputs />
            <Container sx={{ padding: '20px 0' }}>
                <Reviews />
            </Container>
        </div>
    )
}
export default Home
