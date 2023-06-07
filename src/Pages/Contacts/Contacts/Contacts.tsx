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
            <br />
            <br />
            <br />
            <Link to="https://www.google.com/maps/place/Starbucks/@35.0823226,-106.6529774,13.14z/data=!4m15!1m8!3m7!1s0x87220addd309837b:0xc0d3f8ceb8d9f6fd!2z0JDQu9GM0LHRg9C60LXRgNC60LUsINCd0YzRji3QnNC10LrRgdC40LrQviwg0KHQqNCQ!3b1!8m2!3d35.0843859!4d-106.650422!16zL20vMGRqZDM!3m5!1s0x87220b3d6c10eb2f:0xb425a71d3955a3bc!8m2!3d35.0877764!4d-106.5955736!16s%2Fg%2F11bxc797y0">
                <img className="mapImg" src="/images/map.jpg" alt="" />
            </Link>
        </div>
    )
}
export default Contacts
