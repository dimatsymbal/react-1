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
        { title: 'Contacts', link: '/contacts' },
        { title: 'Cart', link: '/cart' },
    ]

    return (
        <footer>
            <Container
                sx={{
                    padding: '60px 0',
                }}
            >
                <div className="row">
                    <div className="col-md-4">
                        <h5 className="footerTitle">FAQ</h5>

                        <button className="footerBtn">
                            <img
                                style={{ width: '48px' }}
                                src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-footer-icon1.svg"
                                alt="footerBtnImg"
                            />
                            <h6>Got questions? Call us 24/7!</h6>
                            <p>+61 (0) 383 766 284</p>
                        </button>

                        <p>
                            Level 13, 2 Elizabeth St, Melbourne, Victoria 3000,
                            Australia
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="footerTitle">Contact Us</h5>
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
                    <div className="col-md-2">
                        <h5 className="footerTitle">Follow Us</h5>
                        <div className="social-icons">
                            <a href="/#" className="facebook">
                                <FacebookIcon /> - Facebook
                            </a>
                            <a href="/#" className="twitter">
                                <TwitterIcon /> - Twitter
                            </a>
                            <a href="/#" className="google">
                                <GoogleIcon /> - Google
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5 className="footerTitle">Quick Links</h5>
                        {footerLinks.map((link, index) => (
                            <div className="divWithRouterLinks" key={index}>
                                <a className="footerLinks" href={link.link}>
                                    {link.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
