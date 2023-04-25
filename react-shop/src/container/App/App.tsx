import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import 'assets/font.css'
import { Route, Routes } from 'react-router-dom'
import Home from 'Pages/Home/Home'
import { Container } from '@mui/material'
import CartPage from 'Pages/Cart/CartPage'
import Examen from 'Pages/Examen/Examen'
import CheckoutPage from 'Pages/Checkout/CheckoutPage'
import ProductPage from 'Pages/Product/ProductPage'

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Container sx={{ padding: '60px 0' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/examen" element={<Examen />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
