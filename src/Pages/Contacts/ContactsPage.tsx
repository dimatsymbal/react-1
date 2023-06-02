import AboutUs from './AboutUs/AboutUs'
import Contacts from './Contacts/Contacts'
import { Container } from '@mui/material'
type Props = {}
const ContactsPage = (props: Props) => {
    return (
        <div>
            <Container sx={{ padding: '20px 0' }}>
                <Contacts />
                <AboutUs />
            </Container>
        </div>
    )
}
export default ContactsPage
