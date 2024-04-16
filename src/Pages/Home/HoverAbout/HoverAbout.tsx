import './HoverAbout.scss'
import Grid from '@mui/material/Grid'

type Props = {}
const HoverAbout = (props: Props) => {
    return (
        <div className="HoverAbout">
            <Grid container spacing={2}>
                <Grid xs={6} sm={4} md={2.4}>
                    <div className="card">
                        <img
                            className="hoverAbout1"
                            src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-home-icon5.svg"
                            alt="hoverAbout1"
                        />
                        <h4 className="hoverAboutH">Free Shipping</h4>
                        <p className="hoverAboutP">For all orders over $200</p>
                    </div>
                </Grid>

                <Grid xs={6} sm={4} md={2.4}>
                    <div className="card">
                        <img
                            className="hoverAbout1"
                            src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-home-icon1.svg"
                            alt="hoverAbout2"
                        />
                        <h4 className="hoverAboutH">Daily Promotions</h4>
                        <p className="hoverAboutP">Discount up to 70%</p>
                    </div>
                </Grid>

                <Grid xs={6} sm={4} md={2.4}>
                    <div className="card">
                        <img
                            className="hoverAbout1"
                            src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-home-icon2.svg"
                            alt="hoverAbout3"
                        />
                        <h4 className="hoverAboutH">Free returns</h4>
                        <p className="hoverAboutP">Return for up to 7 days</p>
                    </div>
                </Grid>

                <Grid xs={6} sm={4} md={2.4}>
                    <div className="card">
                        <img
                            className="hoverAbout1"
                            src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-home-icon3.svg"
                            alt="hoverAbout4"
                        />
                        <h4 className="hoverAboutH">Secure payments</h4>
                        <p className="hoverAboutP">Security guarantee</p>
                    </div>
                </Grid>

                <Grid xs={6} sm={4} md={2.4}>
                    <div className="card">
                        <img
                            className="hoverAbout1"
                            src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-home-icon4.svg"
                            alt="hoverAbout5"
                        />
                        <h4 className="hoverAboutH">Gifts for members</h4>
                        <p className="hoverAboutP">Bonuses for members</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default HoverAbout
