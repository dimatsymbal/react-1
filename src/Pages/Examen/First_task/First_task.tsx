import KnopkaExamenList from 'Components/Knopka_examen/KnopkaExamenList'
import './First_task.scss'
type Props = {}
const FirstTask = (props: Props) => {
    return (
        <div className="first_task">
            <h2>First task</h2>
            <div className="btns_div">
                <KnopkaExamenList />
            </div>
        </div>
    )
}
export default FirstTask
