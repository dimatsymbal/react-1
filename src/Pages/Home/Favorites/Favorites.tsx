import './Favorites.scss'

type Props = {
    favorites: {
        totalCount: number
        totalPrice: number
    }
}
const Favorites = ({ favorites }: Props) => {
    return (
        <div className="Favorites">
            <h2>Favorites</h2>
            <h3>Total count : {favorites.totalCount}</h3>
            <h3>Total price : {favorites.totalPrice}</h3>
        </div>
    )
}
export default Favorites
