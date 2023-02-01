import Button from '@mui/material/Button'

type Props = {}

const Menu = (props: Props) => {
  return (
    <div className="menu_in_nav">
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Payment</Button>
        <Button color="inherit">Shipping</Button>
        <Button color="inherit">Cart</Button>
    </div>
  )
}
export default Menu