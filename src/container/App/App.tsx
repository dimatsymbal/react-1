import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import 'assets/font.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'Pages/Home/Home'
import { Container } from '@mui/material'
import CartPage from 'Pages/Cart/CartPage'
import { omit } from 'lodash'
import Examen from 'Pages/Examen/Examen'
type Props = {}

type productsInCart = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<productsInCart>({
        1: 1,
    })

    // ФУНКЦІЯ ДОДАВАННЯ ТОВАРУ
    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    // ФУНКЦІЯ ВИДАЛЕННЯ ТОВАРУ
    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => omit(prevState, [id])) //викликаємо функцію оміт, на вхід передаємо обєект з якогo будемо видаляти данні і той ключ що будемо видаляти, а саме айді
    }

    // ФУНКЦІЯ ЗМІНИ КІЛЬКОСТІ НА КАРТОЧКАХ У КОРЗИНІ
    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            //повертає setProductsInCart, бере попередній стейт
            ...prevState, //змерджить попередній стейт
            [id]: count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Container sx={{ padding: '60px 0' }}>
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
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity}
                            />
                        }
                    />

                    <Route path="/examen" element={<Examen />} />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
