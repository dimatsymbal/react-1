import ProductsList from 'Components/ProductsList/ProductsList'
import './home.scss'
import Reviews from 'Components/Reviews/Reviews'
import { Button } from '@mui/material'
import productsArrey from 'Utils/ProductsArrey'
type Props = {
    addProductToCart: (countFinal: number, priceFinal: number) => void
}

const Home = ({ addProductToCart }: Props) => {
    return (
        <div className="HomePage">
            <ProductsList addProductToCart={addProductToCart} />
            <Reviews />
        </div>
    )
}
export default Home
