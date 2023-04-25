import './Footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import GoogleIcon from '@mui/icons-material/Google'
import { Container } from '@mui/material'
const Footer = () => {
    const contacts = [
        { icon: 'email', title: 'Email', info: 'example@example.com' },
        { icon: 'phone', title: 'Phone', info: '+123 456 7890' },
        {
            icon: 'location',
            title: 'Address',
            info: '123 Main Street, Anytown',
        },
        { icon: 'social', title: 'Social', info: '@example_social' },
    ]

    const footerLinks = [
        { title: 'Home', link: '/' },
        { title: 'Examen', link: '/examen' },
        { title: 'Payment', link: '/payment' },
        { title: 'Shipping', link: '/shipping' },
        { title: 'Cart', link: '/cart' },
    ]

    return (
        <footer>
            <Container sx={{ padding: '60px 0' }}>
                <div className="row">
                    <div className="col-md-4">
                        <h4>Contact Us</h4>
                        {contacts.map((contact, index) => (
                            <div className="divWithInfo" key={index}>
                                <i className={`fa fa-${contact.icon}`} />
                                <span className="info">
                                    <strong>{contact.title}:</strong>{' '}
                                    {contact.info}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="/#" className="facebook">
                                <FacebookIcon />
                            </a>
                            <a href="/#" className="twitter">
                                <TwitterIcon />
                            </a>
                            <a href="/#" className="google">
                                <GoogleIcon />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4>Quick Links</h4>
                        {footerLinks.map((link, index) => (
                            <div key={index}>
                                <a href={link.link}>{link.title}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
