import { Button } from '@mui/material'
import { useState } from 'react'
type Props = {
    id: number
    text: string
}
const Knopka_examen_listItem = ({ id, text }: Props) => {
    const [kilkist, setKilkist] = useState<number>(0)

    return (
        <Button variant="outlined" onClick={() => setKilkist(kilkist + 1)}>
            {text}: {kilkist}
        </Button>
    )
}
export default Knopka_examen_listItem
