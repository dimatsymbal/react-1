import Grid from '@mui/material/Grid'
import './Recommends.scss'
import { useAppDispatch } from 'redux/hooks'
import {
    filterByHeadphones,
    filterByWatches,
} from 'redux/filterFunctions/filterReducer'

type Props = {}
const Recommends = (props: Props) => {
    const dispatch = useAppDispatch()

    const handleScrollToProductsList = () => {
        const productsList = document.getElementById('ProductsList') //Знаходимо продуктЛіст в іншому компоненті
        if (productsList) {
            //Якщо продуктЛіст не пустий
            productsList.scrollIntoView({ behavior: 'smooth', block: 'start' }) //прокручуємо продуктЛіст на початок
        }
    }

    //В данном случае указано,
    //что прокрутка должна быть плавной, а элемент должен быть выровнен по верхней границе родительского элемента.

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

                        <button
                            className="recommendBtn"
                            onClick={() => {
                                handleScrollToProductsList()
                                dispatch(filterByWatches())
                            }}
                        >
                            Buy now
                        </button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <div className="recomendBlock2">
                        <p className="description">Our recommendation</p>
                        <h2 className="titleRecommend">BeSound</h2>
                        <h5 className="subtitleRecommend">
                            Dolor dictumst pretium
                        </h5>

                        <button
                            className="recommendBtn"
                            onClick={() => {
                                handleScrollToProductsList()
                                dispatch(filterByHeadphones())
                            }}
                        >
                            Products
                        </button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default Recommends
