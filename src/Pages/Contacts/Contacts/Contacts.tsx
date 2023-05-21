import Grid from '@mui/material/Grid'
import './Contacts.scss'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import TelegramIcon from '@mui/icons-material/Telegram'
import { Link } from 'react-router-dom'
type Props = {}
const Contacts = (props: Props) => {
    return (
        <div className="Contacts">
            <h2>Контакти</h2>

            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={6}>
                    <Link className="links" to="https://help.rozetka.com.ua/">
                        <button className="btnsInContacts" id="dovidkoviyCentr">
                            <HelpOutlineIcon /> Довідковий центр
                        </button>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link
                        className="links"
                        to="https://t.me/Rozetka_helpBot?start=src=hc"
                    >
                        <button className="btnsInContacts" id="chatWithMeneger">
                            <TelegramIcon /> Чат з менеджером
                        </button>
                    </Link>
                </Grid>
            </Grid>

            <h6>Пункти самовивозу та повернення</h6>

            <p>
                Актуальна інформація про роботу точок видачі <br />
                Повернути товар можна в сервісних відділах або в пунктах прийому
                повернень.
                <br />
                Пункти прийому повернень не мають сервісних фахівців. Остаточне
                рішення щодо повернення товару буде прийнято після огляду товару
                фахівцем сервісу.
                <br />
                Якщо в місті пролунає сигнал про тривогу, усіх відвідувачів
                Rozetka попросять вийти з магазину та прямувати до найближчої
                захисної споруди чи укриття. Це робиться для вашої безпеки,
                оскільки будівля нашого магазину не є спеціальним укриттям.
            </p>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={6}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis fugiat incidunt laboriosam dolore at eum id
                        deleniti iure temporibus quam ratione asperiores iste
                        facere repudiandae, commodi alias, minima sit
                        accusantium.
                    </p>
                </Grid>
                <Grid item xs={6}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iusto incidunt voluptas officiis iste at placeat
                        rerum amet illum aliquid unde, corporis deleniti
                        voluptatum? Doloremque quae corporis cumque quod culpa
                        debitis!
                    </p>
                </Grid>
            </Grid>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto repellendus molestiae itaque quos perspiciatis
                nesciunt blanditiis? Aliquid veniam omnis qui, minus dolores
                architecto voluptatibus facere nihil vitae obcaecati unde neque.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae vitae ullam provident aut? Sequi cupiditate nemo
                harum dolore nostrum eligendi ipsam sapiente velit et?
                Molestias, accusantium. Nisi dolorem architecto deleniti. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
                dignissimos repellat molestias officiis assumenda pariatur,
                eveniet quam impedit mollitia. Sunt optio illum magni
                consequuntur harum qui aspernatur odit molestias distinctio?
            </p>

            <Link to="https://www.google.com/maps/place/Starbucks/@35.0823226,-106.6529774,13.14z/data=!4m15!1m8!3m7!1s0x87220addd309837b:0xc0d3f8ceb8d9f6fd!2z0JDQu9GM0LHRg9C60LXRgNC60LUsINCd0YzRji3QnNC10LrRgdC40LrQviwg0KHQqNCQ!3b1!8m2!3d35.0843859!4d-106.650422!16zL20vMGRqZDM!3m5!1s0x87220b3d6c10eb2f:0xb425a71d3955a3bc!8m2!3d35.0877764!4d-106.5955736!16s%2Fg%2F11bxc797y0">
                <img className="mapImg" src="/images/map.jpg" alt="" />
            </Link>
        </div>
    )
}
export default Contacts
