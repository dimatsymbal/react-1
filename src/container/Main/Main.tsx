import { Container } from '@mui/material'
import Home from 'Pages/Home/Home'
import './Main.scss'

type Props = {
    addProductToCart: (countFinal: number, priceFinal: number) => void
}
const Main = ({ addProductToCart }: Props) => {
    return (
        <div>
            <div className="main_in_main">
                <Container sx={{ padding: '60px' }}>
                    <Home addProductToCart={addProductToCart} />
                </Container>
            </div>
        </div>
    )
}
export default Main
