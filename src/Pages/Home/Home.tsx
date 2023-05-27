import ProductsList from 'Components/ProductsList/ProductsList'
import './home.scss'
import Reviews from 'Components/Reviews/Reviews'
import SimpleSlider from 'Components/SliderInfo/SliderInfo'
import Favorites from './Favorites/Favorites'
import { useState } from 'react'
type Props = {}

type productsInFav = {
    [id: number]: boolean
}

const Home = (props: Props) => {
    const [productsInFav, setProductsInFav] = useState<productsInFav>({})

    const addProductToFav = (id: number) => {
        setProductsInFav((prevState) => ({
            ...prevState,
            [id]: true,
        }))
    }

    const deleteProductToFav = (id: number) => {
        setProductsInFav((prevState) => {
            const copyOfProduct = { ...prevState } // створюэмо копыю обекта
            delete copyOfProduct[id] // видаляємо ключ з цього обекту
            return copyOfProduct // повертаємо новий обект який вже не має властивості, сопія вже не буде мати id
        })
    }
    return (
        <div className="HomePage">
            <SimpleSlider />
            <Favorites
                productsInFav={productsInFav}
                deleteProductToFav={deleteProductToFav}
            />
            <ProductsList
                addProductToFav={addProductToFav}
                deleteProductToFav={deleteProductToFav}
            />
            <Reviews />
        </div>
    )
}
export default Home
