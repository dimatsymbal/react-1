import { Button, Card, CardActions, CardContent, Grid } from '@mui/material'
import './CardProductListItemExtended.css'
import { Products } from 'Utils/ProductsArrey'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'Components/Quantity/Quantity'

type Props = {
    product: Products
    productCount: number

    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    return (
        <Grid item xs={12} sm={4}>
            <Card className="card_cartpage">
                <CardContent>
                    <div className="product-image">
                        <img
                            className="skajnf3j2n42j3n4m3nj4n2j42n34jn5j3"
                            src={product.images}
                            alt="cartimg"
                        />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <p>Description: {product.description}</p>
                    <Quantity
                        // ПЕРЕВІРКА НА ВИДАЛЕННЯ КАРТОЧКИ
                        count={productCount}
                        onDecrement={() =>
                            productCount <= 1 // ЯКЩО productCount <= 1 ТО ВИКЛИКАЄТЬСЯ ВИДАЛЕННЯ, ІНАКШЕ ЗМІНЮЄТСЯ productCount
                                ? removeProductFromCart(product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                        onIncrement={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        minCount={0}
                    />
                    <p>For all: {product.price * productCount}$</p>
                </CardContent>
                <CardActions className="card_actions">
                    <Button
                        variant="contained"
                        onClick={() => removeProductFromCart(product.id)} //пишимо стрілкову функцію, пов'язано з параметрами. Відбувається зациклення
                        // Викликаємо тоді коли наша функція має параметри (айді), то ми викликаємо її через стрілкову функцію в онкліку
                    >
                        <DeleteIcon />
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
