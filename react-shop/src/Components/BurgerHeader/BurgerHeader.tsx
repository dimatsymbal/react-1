import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import PaymentIcon from '@mui/icons-material/Payment'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

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
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home'].map((text, index) => (
                    <h3>
                        <HomeIcon /> Home
                    </h3>
                ))}
            </List>
            <List>
                {['About'].map((text, index) => (
                    <h3>
                        <InfoIcon /> About
                    </h3>
                ))}
            </List>
            <List>
                {['Payment'].map((text, index) => (
                    <h3>
                        <PaymentIcon /> Payment
                    </h3>
                ))}
            </List>
            <List>
                {['Shipping'].map((text, index) => (
                    <h3>
                        <LocalShippingIcon /> Shipping
                    </h3>
                ))}
            </List>
            <Divider />
            <List>
                {['Cart'].map((text, index) => (
                    <h3>
                        <PaymentIcon /> Cart
                    </h3>
                ))}
            </List>
        </Box>
    )

    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        {anchor}
                    </Button>
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
