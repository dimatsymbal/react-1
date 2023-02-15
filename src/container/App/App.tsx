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
    const [cartData, setcartData] = useState<cartDataProps>({
        totalCount: 15,
        totalPrice: 1000,
    })

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main cartData={cartData} />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
