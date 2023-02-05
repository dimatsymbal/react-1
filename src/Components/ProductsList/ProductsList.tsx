import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" align="center">
                Products List
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    {' '}
                    <ProductsListItem
                        title="iPhone 14"
                        description="bebebe"
                        type="phone"
                        copacity="256 gb"
                        price={1100}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {' '}
                    <ProductsListItem
                        title="iPhone 14 pro"
                        description="bebebe"
                        type="phone"
                        copacity="128 gb"
                        price={1250}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {' '}
                    <ProductsListItem
                        title="iPhone 13"
                        description="bebebe"
                        type="phone"
                        copacity="512 gb"
                        price={1050}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {' '}
                    <ProductsListItem
                        title="iPhone 13 pro"
                        description="bebebe"
                        type="phone"
                        copacity="64 gb"
                        price={1100}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
