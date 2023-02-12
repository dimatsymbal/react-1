import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { Component } from 'react'
import './ProductsListItem.scss'

type State = {
    count: number
    color: string
}

type Props = {
    title: string
    description: string
    type: string
    copacity: string
    price: number
    images: string
}

class ProductsListItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            count: 1,
            color: 'Green',
        }
        this.changeColor = this.changeColor.bind(this)
    }

    changeColor = () => {
        this.setState((prevState: State) => {
            if (prevState.color === 'Green') {
                return {
                    color: 'Red',
                }
            } else {
                return {
                    color: 'Green',
                }
            }
        })
    }

    onIncrementClick = (num: number) => {
        this.setState((prevState: State) => {
            if (prevState.count >= 10) {
                return {
                    count: prevState.count + 0,
                }
            } else {
                return {
                    count: prevState.count + num,
                }
            }
        })
    }

    onDecrementClick = (num: number) => {
        this.setState((prevState: State) => {
            if (prevState.count <= 1) {
                return {
                    count: prevState.count - 0,
                }
            } else {
                return {
                    count: prevState.count - num,
                }
            }
        })
    }

    render() {
        const { title, description, type, copacity, price, images } = this.props
        return (
            <Card variant="outlined">
                <CardContent>
                    <div className="product_image">
                        <img
                            className="product_image_content"
                            src={images}
                            alt="image card"
                        />
                    </div>
                    <h6 className="product_title">{title}</h6>
                    <div className="product_desc">{description}</div>
                    <div className="product_features">{type}</div>
                    <div className="product_features">{copacity} GB</div>
                    {/* <div className="product_price">{price}$</div> */}

                    <div className="color_block">
                        <p>
                            Color:{' '}
                            <span className={this.state.color}>
                                {this.state.color}
                            </span>
                        </p>
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={this.changeColor}
                        >
                            Change color!
                        </Button>
                    </div>

                    <div className="product_quantity">
                        <Button
                            className="button_minus"
                            variant="outlined"
                            size="small"
                            onClick={() => this.onDecrementClick(1)}
                        >
                            -
                        </Button>
                        <TextField
                            size="small"
                            value={this.state.count}
                        ></TextField>
                        <Button
                            className="button_plus"
                            variant="outlined"
                            size="small"
                            onClick={() => this.onIncrementClick(1)}
                        >
                            +
                        </Button>
                    </div>
                </CardContent>

                <CardActions className="flex_btn_in_card">
                    <div className="product_price">{price}$</div>
                    <Button variant="contained">Add to cart!</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductsListItem
