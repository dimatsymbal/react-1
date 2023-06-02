import './FeelTheSound.scss'
import { Card, Grid } from '@mui/material'
import ProductsListItem from 'Components/ProductsList/ProductsListItem'
import productsArrey from 'Utils/ProductsArrey'
import { Container } from '@mui/material'

type Props = {}
const FeelTheSound = (props: Props) => {
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
                        <Grid container spacing={3}>
                            {productsArrey
                                .slice(0, 2)
                                .map(({ id, title, price, images }) => (
                                    <Grid item xs={12} sm={6} md={6} key={id}>
                                        <Card
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
                                            <h6>{title}</h6>
                                            <p>{price}</p>
                                        </Card>
                                    </Grid>
                                ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default FeelTheSound
