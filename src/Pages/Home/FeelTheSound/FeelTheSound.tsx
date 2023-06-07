import './FeelTheSound.scss'
import { Card, Grid } from '@mui/material'
import productsArrey from 'Utils/ProductsArrey'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'
import { useState } from 'react'

type Props = {}
const FeelTheSound = (props: Props) => {
    const [count] = useState<number>(1)
    return (
        <div className="FeelTheSound">
            <Container sx={{ padding: '20px 0' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6}>
                        <h2 className="FeelTheSoundTitle">Feel the Sound</h2>
                        <p className="FeelTheSoundParagraph">
                            Category products
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Grid container spacing={3} className="rightContainer">
                            {productsArrey
                                .filter(
                                    (product) => product.type === 'Навушники'
                                )
                                .slice(2, 4)

                                .map(
                                    ({
                                        id,
                                        title,
                                        price,
                                        images,
                                        quantity,
                                    }) => (
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={6}
                                            key={id}
                                        >
                                            <Card
                                                className="FeelTheSoundCard"
                                                sx={{
                                                    width: '270px',
                                                    marginLeft:
                                                        'calc(50% - 270px / 2)',
                                                }}
                                            >
                                                <img
                                                    className="feelCardImg"
                                                    src={images}
                                                    alt=""
                                                />
                                                <Link to={`/products/${id}`}>
                                                    <h6 className="feelCardTitle">
                                                        {' '}
                                                        {title}
                                                    </h6>
                                                </Link>{' '}
                                                {quantity === 0 ? (
                                                    <p>Товара нема</p>
                                                ) : quantity <= 3 ? (
                                                    <>
                                                        <h4 className="product_old_price">
                                                            {price * count}$
                                                        </h4>
                                                        <h4 className="product_discount_price">
                                                            {price *
                                                                count *
                                                                0.8}
                                                            $
                                                        </h4>
                                                    </>
                                                ) : (
                                                    <h4 className="product_price">
                                                        {price * count}$
                                                    </h4>
                                                )}
                                            </Card>
                                        </Grid>
                                    )
                                )}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default FeelTheSound
