import { Container } from '@mui/material'
import Home from 'Pages/Home/Home'
import './Main.scss'

type Props = {}
const Main = (props: Props) => {
    return (
        <div>
            <div className="main_in_main">
                <Container sx={{ padding: '60px' }}>
                    <Home />
                </Container>
            </div>
        </div>
    )
}
export default Main
