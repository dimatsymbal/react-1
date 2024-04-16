import axios from 'axios'
import { useState } from 'react'
import { Container, Grid, Card } from '@mui/material'
import './CheckoutPage.scss'
import { getProductsObject, Products } from 'Utils/ProductsArrey'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
// import { useFormik } from 'formik';

type ProductsObject = {
    [id: number]: Products
}

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

type Order = {
    name: string
    surname: string
    email: string
    phone: string
    address: string
}

const CheckoutPage = ({ productsInCart }: Props) => {
    const productsArrey = useAppSelector((state) => state.products) // приймаэмо масив з сховища
    const productsObject: ProductsObject = getProductsObject(productsArrey)

    const [isOrderSend, setIsOrderSend] = useState<Boolean>(false) // перевірка чи надіслана форма чи ні

    const [orderData, setOrderData] = useState<Order>({
        name: '',
        surname: '',
        email: '',
        phone: '',
        address: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            surname: e.target.value,
        }))
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            email: e.target.value,
        }))
    }

    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            phone: e.target.value,
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
                    surname: orderData.surname,
                    email: orderData.email,
                    phone: orderData.phone,
                    address: orderData.address,
                }
            )
            .then((res) => res.data)
            .then(({ name, surname, email, phone, address }) => {
                setOrderData({
                    name,
                    surname,
                    email,
                    phone,
                    address,
                })
                setIsOrderSend(true)
            })
    }

    const renderMessage = () => {
        return (
            <div>
                <h4>Dear {orderData.surname}, thanks for your order</h4>
                <p>{orderData.address}</p>
                <p>{orderData.phone} </p>
            </div>
        )
    }

    const renderForm = () => {
        let total = 0

        //productsInCart - це обект
        //Object.keys(productsInCart) - масив ключів, відповідно можемо використати форІч
        //форІч - для перебору масиву елементів у корзині і сумірованія іхніх цін

        Object.keys(productsInCart).forEach((productId) => {
            const productPrice = productsObject[parseInt(productId)].price //ціна товару
            const quantity = productsObject[parseInt(productId)].quantity //його загальна кількість на складі нам треба для перевірки на акцію
            const productQuantity = productsInCart[parseInt(productId)] //кількість товарів яку обрав користувач і додав в карзину

            //перевірка на акційну ціну
            if (quantity <= 3) {
                total = total + productQuantity * productPrice * 0.8
            } else {
                total = total + productPrice * productQuantity //тотал = тотал(спочатку він = 0) + ціна * кількість
            }
        })

        return (
            <>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8} md={8}>
                        <form onSubmit={orderSend} className="orderForm">
                            <div className="upperInputs">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={orderData.name}
                                    onChange={handleName}
                                />
                                <input
                                    type="text"
                                    placeholder="Surname"
                                    value={orderData.surname}
                                    onChange={handleSurname}
                                />
                            </div>
                            <div className="lowerInputs">
                                <input
                                    type="text"
                                    placeholder="Address"
                                    value={orderData.address}
                                    onChange={handleAddress}
                                />

                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={orderData.email}
                                    onChange={handleEmail}
                                />
                            </div>
                            <div className="telInputs">
                                <input
                                    type="tel"
                                    placeholder="+38"
                                    value={orderData.phone}
                                    onChange={handlePhone}
                                />
                            </div>
                            <button className="orderSubmitBtn" type="submit">
                                Send
                            </button>
                        </form>
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                        <div className="right">
                            {/* better to build new comp */}
                            {Object.keys(productsInCart).map((productId) => (
                                <Card
                                    key={productId}
                                    variant="outlined"
                                    className="checkoutCard"
                                >
                                    <p className="checkoutCardTitle">
                                        {
                                            productsObject[parseInt(productId)]
                                                .title
                                        }
                                    </p>

                                    <p className="checkoutCardQuantity">
                                        {productsInCart[parseInt(productId)]}
                                    </p>
                                    <p className="checkoutCardPrice">
                                        {productsObject[parseInt(productId)]
                                            .quantity <= 3
                                            ? productsObject[
                                                  parseInt(productId)
                                              ].price *
                                              0.8 *
                                              productsInCart[
                                                  parseInt(productId)
                                              ]
                                            : productsObject[
                                                  parseInt(productId)
                                              ].price}
                                        $
                                    </p>
                                </Card>
                            ))}

                            <Link className="checkoutLink" to="/cart">
                                <p className="checkoutLink">Change cart</p>
                            </Link>

                            <h5 className="checkoutTotal">Total: {total} $</h5>
                        </div>
                    </Grid>
                </Grid>
            </>
        )
    }

    // const SignupForm = () => {
    //     // Pass the useFormik() hook initial form values and a submit function that will
    //     // be called when the form is submitted
    //     const formik = useFormik({
    //       initialValues: {
    //         email: '',
    //       },
    //       onSubmit: values => {
    //         alert(JSON.stringify(values, null, 2));
    //       },
    //     });
    //     return (
    //       <form onSubmit={formik.handleSubmit}>
    //         <label htmlFor="email">Email Address</label>
    //         <input
    //           id="email"
    //           name="email"
    //           type="email"
    //           onChange={formik.handleChange}
    //           value={formik.values.email}
    //         />

    //         <button type="submit">Submit</button>
    //       </form>
    //     );
    //   };

    return (
        <>
            <Container sx={{ padding: '20px 0' }}>
                <div className="CheckoutPage">
                    <h2 className="checkoutTitle">
                        Confirm
                        <span style={{ color: '#2A27E9' }}> your order</span>
                    </h2>
                    {isOrderSend ? renderMessage() : renderForm()}
                </div>
            </Container>
        </>
    )
}
export default CheckoutPage
