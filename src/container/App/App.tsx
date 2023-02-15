import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import 'assets/font.css'
import { useState } from 'react'

type Props = {}

type cartDataProps = {
    totalCount: number
    totalPrice: number
}

const App = (props: Props) => {
    const [cartData, setCartData] = useState<cartDataProps>({
        totalCount: 0,
        totalPrice: 0,
    })

    const addProductToCart = (countFinal: number, priceFinal: number) => {
        setCartData((prevState) => ({
            totalCount: prevState.totalCount + countFinal,
            totalPrice: prevState.totalPrice + priceFinal,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
