import Knopka_examen_list from 'Components/Knopka_examen/Knopka_examen_list'
import './First_task.scss'
type Props = {}
const First_task = (props: Props) => {
    return (
        <div className="first_task">
            <h2>First task</h2>
            <div className="btns_div">
                <Knopka_examen_list />
            </div>
        </div>
    )
}
export default First_task
