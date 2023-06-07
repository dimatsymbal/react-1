import AboutUs from './AboutUs/AboutUs'
import Contacts from './Contacts/Contacts'
import { Container } from '@mui/material'
import WhyShop from './WhyShop/WhyShop'
type Props = {}
const ContactsPage = (props: Props) => {
    return (
        <div>
            <Container sx={{ padding: '20px 0' }}>
                <Contacts />
                <WhyShop />
                <AboutUs />
            </Container>
        </div>
    )
}
export default ContactsPage
