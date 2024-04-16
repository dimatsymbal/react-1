import MenuItem from './MenuItem'
import './MenuItem.css'
type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <div className="menu_in_nav">
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/contacts">Contacts</MenuItem>
                <MenuItem to="/cart">Cart</MenuItem>
            </div>

            <div className="popupInHeader">
                <p style={{ color: 'black' }}>Cart:</p>
            </div>
        </>
    )
}
export default Menu

// те що в ту - це пропса ту. Що замість хоум - чілдрен
