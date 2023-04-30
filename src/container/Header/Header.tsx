import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import './header.scss'
import Logo from 'Components/Logo/Logo'
import Menu from 'Components/Menu/Menu'
import QuantityHeader from 'Components/QuantityHeader/QuantityHeader'
import TemporaryDrawer from 'Components/BurgerHeader/BurgerHeader'
import LeftInfoDrawer from 'Components/LeftInfoDrawer/LeftInfoDrawer'
import SearchAppBar from 'Components/SearchAppBar/SearchAppBar'
import { Link } from 'react-router-dom'
type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <div className="narrow-panel">
                <Link className="helpUkraineLink" to="https://u24.gov.ua/">
                    Click to help Ukraine!
                    <img
                        src="https://cdn.webshopapp.com/shops/94414/files/52440074/flag-of-ukraine.jpg"
                        alt="UaFlag"
                    />
                </Link>
            </div>
            <AppBar className="app_bar" position="static">
                <Container className="cont_header" maxWidth="lg">
                    <Toolbar>
                        <LeftInfoDrawer />
                        <Logo />

                        <div className="SearchAppBarDiv">
                            <SearchAppBar />
                        </div>
                        <Menu />

                        <QuantityHeader />

                        <div className="adaptive_burger">
                            <TemporaryDrawer />
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default Header
