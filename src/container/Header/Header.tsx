import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import './header.scss'
import Logo from 'Components/Logo/Logo'
import Menu from 'Components/Menu/Menu'
import CardHeader from 'Components/CardHeader/CardHeader'
import TemporaryDrawer from 'Components/BurgerHeader/BurgerHeader'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar className="app_bar" position="static">
            <Container className="cont_header" maxWidth="lg">
                <Toolbar>
                    <Logo />
                    <Menu />

                    <CardHeader />

                    <div className="adaptive_burger">
                        <TemporaryDrawer />
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
