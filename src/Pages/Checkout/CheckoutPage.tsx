import axios from 'axios'
import { useState } from 'react'
import { Container } from '@mui/material'
type Props = {}

type Order = {
    name: string
    address: string
}

const CheckoutPage = (props: Props) => {
    const [isOrderSend, setIsOrderSend] = useState<Boolean>(false) // перевірка чи надіслана форма чи ні

    const [orderData, setOrderData] = useState<Order>({
        name: '',
        address: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            address: e.target.value,
        }))
    }

    const orderSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: orderData.name,
                    address: orderData.address,
                }
            )
            .then((res) => res.data)
            .then(({ name, address }) => {
                setOrderData({
                    name,
                    address,
                })
                setIsOrderSend(true)
            })
    }

    const renderMessage = () => {
        return (
            <div>
                <h4>Dear {orderData.name}, thanks for your order</h4>
                <p>{orderData.address}</p>
            </div>
        )
    }

    const renderForm = () => {
        return (
            <>
                <form onSubmit={orderSend}>
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            value={orderData.name}
                            onChange={handleName}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Address"
                            value={orderData.address}
                            onChange={handleAddress}
                        />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </>
        )
    }

    return (
        <>
            <Container sx={{ padding: '20px 0' }}>
                <h2>Checkout</h2>
                {isOrderSend ? renderMessage() : renderForm()}
            </Container>
        </>
    )
}
export default CheckoutPage
