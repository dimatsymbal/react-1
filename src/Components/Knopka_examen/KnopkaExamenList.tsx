import Knopka_examen_listItem from './KnopkaExamenListItem'
import buttonsArrey from 'Utils/ButtonsArrey'
type Props = {}

type Button = {
    id: number
    text: string
}

const KnopkaExamenList = (props: Props) => {
    return (
        <div>
            <div className="btns_div">
                {buttonsArrey.map(({ id, text }: Button) => (
                    <div className="child" key={id}>
                        <Knopka_examen_listItem id={id} text={text} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default KnopkaExamenList
