import { Button } from '@mui/material'
import SecondTaskList from 'Components/SecondTaskList/SecondTaskList'
import './Second_task.scss'
import { useState } from 'react'

type Props = {}

type CartDataProps = {
    totalPrice: number
}

const SecondTask = (props: Props) => {
    const [cartData, setCartData] = useState<CartDataProps>({
        totalPrice: 0,
    })

    const addCardToCart = (price: number) => {
        setCartData((prevState) => ({
            totalPrice: prevState.totalPrice + price,
        }))
    }

    const [currenscyNumber, setCurrencyNumber] = useState<number>(1)
    const [currenscyTotalNumber, setCurrenscyTotalNumber] = useState<number>(1)
    const [currenscyText, setCurrencyText] = useState<string>('USD')

    const changeCurencyToUAH = () => {
        setCurrencyText(() => 'UAH')
        setCurrencyNumber(37)
        setCurrenscyTotalNumber(37)
    }

    const changeCurencyToUSD = () => {
        setCurrencyText(() => 'USD')
        setCurrencyNumber(1)
        setCurrenscyTotalNumber(1)
    }

    const changeCurencyToEUR = () => {
        setCurrencyText(() => 'EUR')
        setCurrencyNumber(0.98)
        setCurrenscyTotalNumber(0.98)
    }

    const changeCurencyToGBP = () => {
        setCurrencyText(() => 'GBP')
        setCurrencyNumber(0.83)
        setCurrenscyTotalNumber(0.83)
    }

    return (
        <div className="Second_task">
            <h2 className="title_Second_task">Second task</h2>
            <div className="btns_div">
                <Button variant="outlined" onClick={() => changeCurencyToUSD()}>
                    USD
                </Button>
                <Button variant="outlined" onClick={() => changeCurencyToEUR()}>
                    EUR
                </Button>
                <Button variant="outlined" onClick={() => changeCurencyToUAH()}>
                    UAH
                </Button>
                <Button variant="outlined" onClick={() => changeCurencyToGBP()}>
                    GBP
                </Button>
            </div>

            <div>
                <SecondTaskList
                    addCardToCart={addCardToCart}
                    currenscyNumber={currenscyNumber}
                    currenscyText={currenscyText}
                />
            </div>

            <h2 className="title_total_task_2">
                total Price: {cartData.totalPrice * currenscyTotalNumber}
            </h2>
        </div>
    )
}
export default SecondTask
