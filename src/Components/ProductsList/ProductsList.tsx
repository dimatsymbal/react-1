import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArrey from 'Utils/ProductsArrey'
import { useState } from 'react'
import { Button } from '@mui/material'
import './ProductsList.scss'
type Props = {}

const ProductsList = (props: Props) => {
    const [rozdilName, setRozdilName] = useState<string>('iPhones List')

    const [sortBtnName, setSortBtnName] = useState<string>('Телефон')

    const changeSortBtnByPhones = () => {
        setSortBtnName(() => 'Телефон')
        setRozdilName(() => 'iPhones List')
    }

    const changeSortBtnByHeadphones = () => {
        setSortBtnName(() => 'Навушники')
        setRozdilName(() => 'AirPods List')
    }

    const changeSortBtnByLaptops = () => {
        setSortBtnName(() => 'Ноутбук')
        setRozdilName(() => 'Laptops List')
    }

    return (
        <>
            <Typography
                variant="h4"
                component="h2"
                align="center"
                sx={{
                    marginTop: '-20px',
                    marginBottom: '60px',
                }}
            >
                {rozdilName}
            </Typography>

            <div className="sort_btns_block">
                <Button onClick={() => changeSortBtnByPhones()}>Phones</Button>
                <Button onClick={() => changeSortBtnByHeadphones()}>
                    Headphones
                </Button>
                <Button onClick={() => changeSortBtnByLaptops()}>
                    Laptops
                </Button>
            </div>

            <Grid container spacing={3}>
                {productsArrey
                    .filter((product) => product.type === sortBtnName) //МЕТОД ФІЛЬТР, ПРОДУКТ - ПОТОЧНИЙ ЕЛЕМЕНТ МАСИВУ, І МИ З ТОГО ПРОДУКТУ ФІЛЬТРУЄМО ПО КАТЕГОРІЇ
                    .map(
                        //ПІСЛЯ ФІЛЬТРУ ЗАПУСКАЄМО МЕТОД МЄП І ПРОХОДИМОСЬ ПО ЕЛЕМЕНТАХ МАСИВУ
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
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                {' '}
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
        </>
    )
}
export default ProductsList
