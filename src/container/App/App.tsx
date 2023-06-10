import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import 'assets/font.css'
import { Route, Routes } from 'react-router-dom'
import Home from 'Pages/Home/Home'
import CartPage from 'Pages/Cart/CartPage'
import Examen from 'Pages/Examen/Examen'
import CheckoutPage from 'Pages/Checkout/CheckoutPage'
import ProductPage from 'Pages/Product/ProductPage'
import ScrollToTop from 'Utils/scrollToTop'
import ContactsPage from 'Pages/Contacts/ContactsPage'
import ProductsList from 'Components/ProductsList/ProductsList'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { useEffect } from 'react'
import { fetchProducts } from 'redux/productsReducer'

type Props = {}

const App = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    })

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="/products" element={<ProductsList />} />
                <Route
                    path="/checkout"
                    element={<CheckoutPage productsInCart={productsInCart} />}
                />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/examen" element={<Examen />} />
                <Route path="/products/:id" element={<ProductPage />} />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
