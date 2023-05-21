import ProductsList from 'Components/ProductsList/ProductsList'
import './home.scss'
import Reviews from 'Components/Reviews/Reviews'
import SimpleSlider from 'Components/SliderInfo/SliderInfo'
import Favorites from './Favorites/Favorites'
import { useState } from 'react'
type Props = {}

type cartDataProps = {
    totalCount: number
    totalPrice: number
}

const Home = (props: Props) => {
    const [favorites, setFavorites] = useState<cartDataProps>({
        totalCount: 0,
        totalPrice: 0,
    })

    const addProductToFav = (quantity: number, price: number) => {
        setFavorites((prevState) => ({
            totalCount: prevState.totalCount + quantity,
            totalPrice: prevState.totalPrice + quantity * price,
        }))
    }
    return (
        <div className="HomePage">
            <SimpleSlider />
            <Favorites favorites={favorites} />
            <ProductsList addProductToFav={addProductToFav} />
            <Reviews />
        </div>
    )
}
export default Home
