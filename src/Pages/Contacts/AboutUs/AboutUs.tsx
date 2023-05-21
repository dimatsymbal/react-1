import './AboutUs.scss'
import Grid from '@mui/material/Grid'

type Props = {}
const AboutUs = (props: Props) => {
    return (
        <div className="AboutUs">
            <br />
            <br />
            <h2>Про нас</h2>
            <br />
            <h6>Маленькі мрії та грандіозні плани</h6>
            <p>
                ROZETKA − найбільший онлайн-ритейлер у країні. З 2005 року ми
                втілюємо маленькі мрії та грандіозні плани мільйонів людей. У
                нас можна знайти буквально все. Ми продаємо за справедливою
                ціною та надаємо гарантію, бо вважаємо, що онлайн-шопінг має
                бути максимально зручним і безпечним. І щоразу, коли хтось
                натискає «Купити», ми розуміємо, що робимо потрібну справу.
            </p>

            <Grid
                className="gridContainer"
                container
                rowSpacing={3}
                spacing={5}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{
                    padding: '0px',
                }}
            >
                <Grid
                    item
                    xs={3}
                    sx={{
                        padding: '20px 0',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        className="gallery"
                        src="https://eimg.pravda.com/images/doc/7/0/70d0a2c-rozetka.jpg"
                        alt="gallery1"
                    />
                </Grid>
                <Grid
                    item
                    xs={6}
                    sx={{
                        padding: '20px 0',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        className="galleryLong"
                        src="https://content.rozetka.com.ua/files/images/original/188070095.jpg"
                        alt="gallery2"
                    />
                </Grid>
                <Grid
                    item
                    xs={3}
                    sx={{
                        padding: '20px 0',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        className="gallery"
                        src="https://content1.rozetka.com.ua/files/images/original/188070098.jpg"
                        alt="gallery2"
                    />
                </Grid>

                <Grid
                    item
                    xs={3}
                    sx={{
                        padding: '20px 0',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        className="gallery"
                        src="https://content.rozetka.com.ua/files/images/original/216227872.jpg"
                        alt="gallery1"
                    />
                </Grid>
                <Grid
                    item
                    xs={6}
                    sx={{
                        padding: '20px 0',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        className="galleryLong"
                        src="https://content1.rozetka.com.ua/files/images/original/188071208.jpg"
                        alt="gallery2"
                    />
                </Grid>
                <Grid
                    item
                    xs={3}
                    sx={{
                        padding: '20px 0',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        className="gallery"
                        src="https://content.rozetka.com.ua/files/images/original/188070095.jpg"
                        alt="gallery2"
                    />
                </Grid>
            </Grid>

            <br />
            <br />
            <br />
            <h6>Наша мета − бути корисними</h6>
            <p>
                Ми віримо, що речі існують для того, щоб робити життя простішим,
                приємнішим і добрішим. Тому й пошук тієї самої речі повинен бути
                швидким, зручним і приємним. Ми не просто продаємо побутову
                техніку, електроніку, прикраси або вино. Ми допомагаємо знайти
                саме те, що треба, в одному місці та без зайвих хвилювань, щоб
                ви не витрачали життя на пошуки, а просто жили щасливо. Rozetka
                − це універсальна відповідь на будь-який запит, початок пошуку
                та його кінцева зупинка, справжній помічник. Ми назавжди
                позбавляємо своїх покупців від неприємних компромісів, виконуємо
                бажання і даємо змогу мріяти сміливіше. Завдяки розумному пошуку
                та чесному сервісу ми робимо життя наших клієнтів трішки кращим
                просто зараз.
            </p>
            <br />
            <br />
            <h6>Щоб мрії здійснювалися легко</h6>
            <p>
                Ми відкриваємо величезні офлайн-магазини, щоб ви могли прийти,
                потримати в руках і протестувати вподобаний продукт. Ми хочемо,
                щоб у нас був найкращий у світі сервіс, тому навчаємо
                співробітників не тільки технічній частині справи, а й роботі з
                клієнтом.
            </p>

            <br />
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={6}>
                    <h2 className="greenGridTitle">3.9 млн</h2>
                    <p className="greenGridPar">доступних до покупки товарів</p>
                </Grid>
                <Grid item xs={6}>
                    <h2 className="greenGridTitle">789 млн</h2>
                    <p className="greenGridPar">
                        користувачів відвідали Rozetka в 2018 році
                    </p>
                </Grid>
                <Grid item xs={6}>
                    <h2 className="greenGridTitle">81%</h2>
                    <p className="greenGridPar">наших покупців повертаються</p>
                </Grid>
                <Grid item xs={6}>
                    <h2 className="greenGridTitle">2.5 млн</h2>
                    <p className="greenGridPar">відвідувачів в день</p>
                </Grid>
            </Grid>
            <br />
            <br />

            <h6>Далі − більше</h6>
            <p>
                Ми хочемо, щоб у наших клієнтів взагалі ніколи не виникало
                запитання «де знайти щось потрібне». Тому сьогодні ми не тільки
                найбільший онлайн-ритейлер, а ще й майданчик для продавців.
                Хтось почне з нами свій перший бізнес (або розширить наявний), а
                хтось − привезе в Україну продукти, яких поки що немає. Це
                вигідно всім: і покупцям, і продавцям, і навіть нам − адже так
                ми допоможемо більшій кількості людей стати трохи щасливішими.
            </p>

            <br />
            <br />

            <h6>Чекаємо вас тут</h6>
            <button className="finalButtonInAboutUs">
                Пункти самовивозу та повернення
            </button>
        </div>
    )
}
export default AboutUs
