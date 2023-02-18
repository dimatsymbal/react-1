import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import './Menu.css'
type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="menu_in_nav">
            <Button color="inherit">
                <Link className="link" to="/">
                    Home
                </Link>
            </Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Payment</Button>
            <Button color="inherit">Shipping</Button>
            <Button color="inherit">
                <Link className="link" to="/cart">
                    Cart
                </Link>
            </Button>
        </div>
    )
}
export default Menu
