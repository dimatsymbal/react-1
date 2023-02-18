import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArrey from 'Utils/ProductsArrey'

type Props = {
    addProductToCart: (countFinal: number, priceFinal: number) => void
}

const ProductsList = ({ addProductToCart }: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    marginBottom: '50px',
                }}
            >
                iPhones List
            </Typography>

            <Grid container spacing={3}>
                {productsArrey.map(
                    ({
                        id,
                        title,
                        description,
                        type,
                        copacity,
                        price,
                        images,
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
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
