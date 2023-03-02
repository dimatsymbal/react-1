import MenuItem from './MenuItem'
type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="menu_in_nav">
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/payment">Payment</MenuItem>
            <MenuItem to="/shipping">Shipping</MenuItem>
            <MenuItem to="/cart">Cart</MenuItem>
        </div>
    )
}
export default Menu

// те що в ту - це пропса ту. Що замість хоум - чілдрен
