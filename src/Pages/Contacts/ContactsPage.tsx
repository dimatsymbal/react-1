import AboutUs from './AboutUs/AboutUs'
import Contacts from './Contacts/Contacts'

type Props = {}
const ContactsPage = (props: Props) => {
    return (
        <div>
            <Contacts />
            <AboutUs />
        </div>
    )
}
export default ContactsPage
