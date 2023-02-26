import { Button, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

type Props = {
    onDecrement: () => void
    onIncrement: () => void
    count: number
    minCount?: number
}
const Quantity = ({ onDecrement, onIncrement, count, minCount = 1 }: Props) => {
    return (
        <div className="product_quantity">
            <Button
                className="button_minus"
                variant="outlined"
                size="small"
                onClick={() => onDecrement()}
                disabled={count <= minCount}
            >
                <RemoveIcon />
            </Button>
            <TextField size="small" value={count}></TextField>
            <Button
                className="button_plus"
                variant="outlined"
                size="small"
                onClick={() => onIncrement()}
                disabled={count >= 10}
            >
                <AddIcon />
            </Button>
        </div>
    )
}
export default Quantity
