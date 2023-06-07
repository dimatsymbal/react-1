import { Card, Grid } from '@mui/material'
import './WhyShop.scss'
import { Link } from 'react-router-dom'

type Props = {}
const WhyShop = (props: Props) => {
    return (
        <div className="WhyShop">
            <p className="WhyShopTitle">Why BeShop?</p>
            <h2 className="WhyShopSubtitle">
                New <span style={{ color: '#2A27E9' }}>BePhone Pro.</span>
            </h2>

            <Grid
                container
                rowSpacing={4}
                columnSpacing={{ xs: 3, sm: 3, md: 3 }}
            >
                <Grid item xs={12} sm={6} md={6}>
                    <Card className="WhyShopCard">
                        <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        >
                            <Grid item xs={6}>
                                {' '}
                                <h6 className="WhyShopCardTitle">
                                    Guarantee of originality
                                </h6>
                                <p className="WhyShopCardText">
                                    Sapien fermentum diam egestas tellus
                                    commodo. Scelerisque.
                                </p>
                                <Link className="WhyShopCardLink" to="/">
                                    Show me products
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <img
                                    className="WhyShopCardImg"
                                    src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-home-pic3.webp"
                                    alt="WhyShopCardImg"
                                />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Card className="WhyShopCard">
                        <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        >
                            <Grid item xs={6}>
                                {' '}
                                <h6 className="WhyShopCardTitle">
                                    Safe payments
                                </h6>
                                <p className="WhyShopCardText">
                                    Sapien fermentum diam egestas tellus
                                    commodo. Scelerisque.
                                </p>
                                <Link className="WhyShopCardLink" to="/">
                                    Show me products
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <img
                                    className="WhyShopCardImg"
                                    src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-home-pic2.webp"
                                    alt="WhyShopCardImg"
                                />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
export default WhyShop
