import { Container } from '@mui/material'
import Home from 'Pages/Home/Home'
import './Main.scss'

type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
}
const Main = ({ cartData }: Props) => {
    return (
        <div>
            <div className="main_in_main">
                <Container sx={{ padding: '60px' }}>
                    <Home cartData={cartData} />
                </Container>
            </div>
        </div>
    )
}
export default Main
