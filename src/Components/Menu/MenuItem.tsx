import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import './MenuItem.css'

type Props = {
    to: string
    children: React.ReactNode //контент самої лінки

    //в чилдрен може прийти люба структура
}

const MenuItem = ({ to, children }: Props) => {
    return (
        <Button>
            <NavLink
                to={to} //НА ВХІД ПРИЙМАЄТЬСЯ ЮРЛ
                className={({ isActive }) =>
                    isActive ? 'menu-item-active' : 'menu-item'
                }
            >
                {children}
                {/* НА ВХІД ПРИЙМАЄТЬСЯ НАЗВА */}
            </NavLink>
        </Button>
    )
}
export default MenuItem
