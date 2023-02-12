import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArrey from 'Utils/ProductsArrey'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    marginBottom: '50px',
                }}
            >
                Products List
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
                                images={images}
                                title={title}
                                description={description}
                                type={type}
                                copacity={copacity}
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
