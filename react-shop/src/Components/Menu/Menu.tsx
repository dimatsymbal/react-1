import MenuItem from './MenuItem'
type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="menu_in_nav">
            <MenuItem to="/">Home</MenuItem>
            {/* <MenuItem to="/examen">Examen</MenuItem>
            <MenuItem to="/payment">Payment</MenuItem> */}
            <MenuItem to="/contacts">Contacts</MenuItem>
            <MenuItem to="/cart">Cart</MenuItem>
        </div>
    )
}
export default Menu

// те що в ту - це пропса ту. Що замість хоум - чілдрен
