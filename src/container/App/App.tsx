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
import ScrollToTop from 'Utils/scrollToTop'

import ContactsPage from 'Pages/Contacts/ContactsPage'

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Container sx={{ padding: '20px 0' }}>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route path="/examen" element={<Examen />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
function useEffect(arg0: any) {
    throw new Error('Function not implemented.')
}
