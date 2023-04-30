import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import './LeftInfoDrawer.scss'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

type Anchor = 'left'

export default function LeftInfoDrawer() {
    const [state, setState] = React.useState({
        left: false,
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
            sx={{ width: 300, paddingLeft: '10px', paddingRight: '10px' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <button
                    className="donateBtn"
                    onClick={() =>
                        window.open(
                            'https://savelife.in.ua/en/donate-en/#donate-army-card-monthly',
                            '_blank'
                        )
                    }
                >
                    <img
                        src="https://xl-static.rozetka.com.ua/assets/img/design/logos/war_icon.svg"
                        alt="donateBtnLogo"
                    />{' '}
                    Повернись живим <ChevronRightIcon />
                </button>
                <h3>Додаткова інформація</h3>
                <hr />
                <h6>Інформація про компанію</h6>

                <ul>
                    <li>
                        <Link className="leftDrawerLinks" to="/">
                            Про нас
                        </Link>
                    </li>
                    <li>
                        <Link className="leftDrawerLinks" to="/">
                            Умови використання сайту
                        </Link>
                    </li>
                    <li>
                        <Link className="leftDrawerLinks" to="/">
                            Вакансії
                        </Link>
                    </li>
                    <li>
                        <Link className="leftDrawerLinks" to="/">
                            Контакти
                        </Link>
                    </li>
                </ul>
                <hr />
                <h6>Допомога</h6>
                <ul>
                    <li>
                        <Link className="leftDrawerLinks" to="/">
                            Доставка та оплата
                        </Link>
                    </li>
                    <li>
                        <Link className="leftDrawerLinks" to="/">
                            Кредит
                        </Link>
                    </li>
                    <li>
                        <Link className="leftDrawerLinks" to="/">
                            Гарантія
                        </Link>
                    </li>
                    <li>
                        <Link className="leftDrawerLinks" to="/">
                            Повернення товару
                        </Link>
                    </li>
                    <li>
                        <Link className="leftDrawerLinks" to="/">
                            Сервісні центри
                        </Link>
                    </li>
                </ul>

                <hr />
                <h6>Завантажуйте наші додатки</h6>

                <a href="https://play.google.com/store/apps/details/?id=ua.com.rozetka.shop&referrer=utm_source%3Dfullversion%26utm_medium%3Dsite%26utm_campaign%3Dfullversion">
                    <img
                        className="downloadImg"
                        src="https://xl-static.rozetka.com.ua/assets/img/design/button-google-play-ua.svg"
                        alt=""
                    />
                </a>

                <a href="https://apps.apple.com/app/apple-store/id740469631">
                    <img
                        className="downloadImg"
                        src="https://xl-static.rozetka.com.ua/assets/img/design/button-appstore-ua.svg"
                        alt=""
                    />
                </a>
            </List>
        </Box>
    )

    return (
        <div className="LeftInfoDrawer">
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton
                        className="LeftInfoDrawerButton"
                        onClick={toggleDrawer(anchor, true)}
                    >
                        <MenuIcon />
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
