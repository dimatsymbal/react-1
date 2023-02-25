import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import 'assets/font.css'
import { useState } from 'react'
import { count } from 'console'
import { Route, Routes } from 'react-router-dom'
import Home from 'Pages/Home/Home'
import { Container } from '@mui/material'
import CartPage from 'Pages/Cart/CartPage'

type Props = {}

type productsInCart = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<productsInCart>({
        1: 5,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const deleteProductFromCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) - count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => {
            let prevProductsInCart = { ...prevState }
            delete prevProductsInCart[id]
            return prevProductsInCart
        })
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Container sx={{ padding: '60px 0' }}>
                <button onClick={() => removeProductFromCart(1)}>
                    Delete product!
                </button>
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />

                    <Route
                        path="cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                deleteProductFromCart={deleteProductFromCart}
                            />
                        }
                    />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
