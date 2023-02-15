import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
// import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import './header.scss'
import Logo from 'Components/Logo/Logo'
import Menu from 'Components/Menu/Menu'
import CardHeader from 'Components/CardHeader/CardHeader'

type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
}
const Header = ({ cartData }: Props) => {
    return (
        <AppBar className="app_bar" position="static">
            <Container maxWidth="lg">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Logo />
                    <Menu />

                    {/* <Button color="inherit">Login</Button> */}

                    <CardHeader cartData={cartData} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
