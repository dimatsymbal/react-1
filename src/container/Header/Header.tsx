import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
// import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import './header.scss'
import Logo from 'Components/Logo/Logo'
import Menu from 'Components/Menu/Menu'
import CardHeader from 'Components/CardHeader/CardHeader'
import TemporaryDrawer from 'Components/Adaptive_Burger/burger_header'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const Header = ({ productsInCart }: Props) => {
    return (
        <AppBar className="app_bar" position="static">
            <Container className="cont_header" maxWidth="lg">
                <Toolbar>
                    <Logo />
                    <Menu />

                    <CardHeader productsInCart={productsInCart} />

                    <div className="adaptive_burger">
                        <TemporaryDrawer />
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
