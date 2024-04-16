import './TopRated.scss'
import { Grid } from '@mui/material'
import ProductsListItem from 'Components/ProductsList/ProductsListItem'
import { Container } from '@mui/material'
import { useState } from 'react'
import { useAppSelector } from 'redux/hooks'
type Props = {}
const TopRated = (props: Props) => {
    const [productShow, setProductShow] = useState<number>(4)

    const showMore = () => {
        setProductShow(() => productShow + 3)
    }

    const hideAll = () => {
        setProductShow(4)
        // проверка наличия элемента с className "TopRated" в документе
        //Если элемент с таким className найден, то вызывается метод scrollIntoView(), который прокручивает страницу так, чтобы этот элемент был виден в окне браузера.
        //Внутри метода scrollIntoView() передаются опции прокрутки, заданные в виде объекта:
        //behavior: 'smooth' указывает, что прокрутка должна быть плавной и анимированной.
        //block: 'start' указывает, что элемент должен быть прокручен так, чтобы его верхняя часть была выровнена с верхней частью контейнера прокрутки.

        const componentElement = document.querySelector('.TopRated')
        if (componentElement) {
            componentElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }

    const productsArrey = useAppSelector((state) => state.products) // приймаэмо масив з сховища

    return (
        <div className="TopRated">
            <Container sx={{ padding: '20px 0' }}>
                <h2 className="TopRatedTitle">Top rated products</h2>
                <p className="TopRatedParagraph">Best choice</p>

                <Grid container spacing={3}>
                    {productsArrey
                        .filter(
                            (product) =>
                                product.quantity <= 3 && product.quantity > 0
                        )
                        .filter(
                            (product) =>
                                product.type === 'Ігровa консоль' ||
                                product.type === 'Навушники' ||
                                product.type === 'Телефон' ||
                                product.type === 'Телевізори' ||
                                product.type === 'Ноутбук' ||
                                product.type === 'Годинник'
                        )
                        .slice(1, productShow)
                        .map(
                            ({
                                id,
                                title,
                                description,
                                type,
                                copacity,
                                price,
                                images,
                                quantity,
                            }) => (
                                <Grid
                                    className="gridItem"
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    key={id}
                                >
                                    <ProductsListItem
                                        id={id}
                                        images={images}
                                        title={title}
                                        description={description}
                                        type={type}
                                        copacity={copacity}
                                        price={price}
                                        quantity={quantity}
                                    />
                                </Grid>
                            )
                        )}
                </Grid>

                <button className="showMore" onClick={() => showMore()}>
                    Show more
                </button>

                <button
                    onClick={() => hideAll()}
                    className={productShow > 4 ? 'hideAll' : 'hideAllDisabled'}
                >
                    Hide all
                </button>
            </Container>
        </div>
    )
}
export default TopRated
