import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import './header.scss'
import Logo from 'Components/Logo/Logo'
import Menu from 'Components/Menu/Menu'
import QuantityHeader from 'Components/QuantityHeader/QuantityHeader'
import TemporaryDrawer from 'Components/BurgerHeader/BurgerHeader'
import LeftInfoDrawer from 'Components/LeftInfoDrawer/LeftInfoDrawer'
// import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
type Props = {}

const Header = (props: Props) => {
    return (
        <>
            {/* <div className="narrow-panel">
                <Link className="helpUkraineLink" to="https://u24.gov.ua/">
                    Click to help Ukraine!
                    <img
                        src="https://cdn.webshopapp.com/shops/94414/files/52440074/flag-of-ukraine.jpg"
                        alt="UaFlag"
                    />
                </Link>
            </div> */}
            <AppBar className="app_bar" position="static">
                <Container className="cont_header" maxWidth="lg">
                    <Toolbar>
                        <LeftInfoDrawer />
                        <Logo />

                        <div className="mediaDiv">
                            <IconButton aria-label="delete">
                                <InstagramIcon sx={{ color: 'white' }} />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <FacebookIcon sx={{ color: 'white' }} />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <TwitterIcon sx={{ color: 'white' }} />
                            </IconButton>
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
