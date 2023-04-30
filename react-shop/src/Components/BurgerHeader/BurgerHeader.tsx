import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import CallIcon from '@mui/icons-material/Call'
import WidgetsIcon from '@mui/icons-material/Widgets'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useAppSelector } from 'redux/hooks'
import './BurgerHeader.scss'
import { Link } from 'react-router-dom'

type Anchor = 'right'
export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return
            }

            setState({ ...state, [anchor]: open })
        }

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: 300,
                backgroundColor: '#1976d2',
                height: '100%',
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="blockWithNavBtns">
                <Button variant="outlined" className="navBtnHome">
                    <Link className="navLinkInBtn" to="/">
                        <HomeIcon />
                        Home
                    </Link>
                </Button>

                <Button variant="outlined" className="navBtnContacts">
                    <Link className="navLinkInBtn" to="/contacts">
                        <CallIcon />
                        Contacts
                    </Link>
                </Button>

                {cartItemsCount === 0 ? (
                    ''
                ) : (
                    <div className="quantityCircle">{cartItemsCount}</div>
                )}

                <Button variant="outlined" className="navBtnCart">
                    <Link className="navLinkInBtn" to="/cart">
                        <AddShoppingCartIcon />
                        Cart
                    </Link>
                </Button>
            </div>
        </Box>
    )

    const productsInCart = useAppSelector((state) => state.productsInCart)

    const cartItemsCount = Object.values(productsInCart).reduce(
        (a, b) => a + b,
        0
    )

    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton
                        className="widgetBtn"
                        onClick={toggleDrawer(anchor, true)}
                    >
                        <WidgetsIcon />
                    </IconButton>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    )
}
