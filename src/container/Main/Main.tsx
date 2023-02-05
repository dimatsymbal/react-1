import { Container } from '@mui/material'
import Home from 'Pages/Home/Home'

type Props = {}
const Main = (props: Props) => {
    return (
        <div>
            <Container sx={{ padding: '60px' }}>
                <Home />
            </Container>
        </div>
    )
}
export default Main
