import Grid from '@mui/material/Grid'
import './Recommends.scss'
import { Link } from 'react-router-dom'

type Props = {}
const Recommends = (props: Props) => {
    return (
        <div className="Recommends">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <div className="recomendBlock1">
                        <p className="description">Our recommendation</p>
                        <h2
                            className="titleRecommend"
                            style={{ color: 'white' }}
                        >
                            BeWatch GT
                        </h2>
                        <h5 className="subtitleRecommend">
                            Dolor dictumst pretium
                        </h5>

                        <Link to="/cart">
                            <button className="recommendBtn">Buy now</button>
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <div className="recomendBlock2">
                        <p className="description">Our recommendation</p>
                        <h2 className="titleRecommend">BeSound</h2>
                        <h5 className="subtitleRecommend">
                            Dolor dictumst pretium
                        </h5>
                        <button className="recommendBtn">Buy now</button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default Recommends
