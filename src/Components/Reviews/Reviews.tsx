import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import TextareaAutosize from '@mui/base/TextareaAutosize'
import * as React from 'react'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import { useState } from 'react'
type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Olga',
            text: 'Брали телефон чоловіку. Дуже задоволений!! Варто брати, якщо ви хочете обновити свій наприклад 8й чи 11й айфон ',
        },
        {
            name: 'Victor',
            text: 'В характеристиках указано, что в телефоне есть вспышка и стерозвук (как будто 2002 год на дворе), но очередной раз эпплы забыли упомянуть объём батарей. ',
        },
        {
            name: 'Kyrylo',
            text: 'В характеристиках указано, что в телефоне есть вспышка и стерозвук (как будто 2002 год на дворе), но очередной раз эпплы забыли упомянуть объём батарей. указано, что в телефоне есть вспышка и стерозвук (как будто 2002 год на дворе), но очередной раз эп ',
        },
    ]

    const [reviews, setReview] = useState<Review[]>(arrReviews)
    const [newReviews, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    //ПОДІБНІ ОПИСИ -- https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events

    //ФУНКЦІЯ ЯКА РЕАГУЄ НА ЗМІНУ ІМЕНІ
    //ФУНКЦІЯ БУДЕ ПРИЙМАТИ ШТУЧНОСТВОРЕНИЙ ОБРОБНИК ПОДІЙ EVENT(e), ДАЛІ В ІВЕНТІ ОПИСУЄМО ТИП. ТАК ЯК НЄЙМ В ІНПУТІ ТО ПИШИМО --ChangeEvent<HTMLInputElement>--
    //ДАЛІ ВИКЛИКАЄМО setNewReview ЯКА ПРИЙМАЄ ПОПЕРЕДНЄ ЗНАЧЕННЯ СТЕЙТУ І ПОВЕРНЕМ НОВИЙ СТЕЙТ
    //ЗМЕРДЖИМ ПОПЕРЕДНІЙ СТЕЙТ
    //КИКЛИКАЄМО НЕЙМ І ЗВЕРТАЄМОСЯ ДО ОБ'ЄКТУ ПОДІЇ ДАЛІ ДО event.target І value
    //ТАКИМ ЧИНОМ МИ ДІЗНАЄМОСЯ ЗНАЧЕННЯ ОДНІЄЇ ЛІТЕРИ

    //ТАКИМ ЧИНОМ МИ ЗІБРАЛИ ДАННІ ЯКІ ВВОДИТЬ КОРИСТУВАЧ

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value, //event.target - вказує на елемент на який було клікнуто
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value, //event.target - вказує на елемент на який було клікнуто
        }))
    }

    //ФУНКЦІЯ ЯКА ДОДАЄ ВІДГУК
    //ФУНКЦІЯ БУДЕ ПРИЙМАТИ ШТУЧНОСТВОРЕНИЙ ОБРОБНИК ПОДІЙ EVENT(e), ДАЛІ В ІВЕНТІ ОПИСУЄМО ТИП. ТАК ЯК ПИШЕМО ПРО ФОРМУ ТО --FormEvent<HTMLFormElement>--
    //e.preventDefault() - ЩОБ КОЛИ МИ ВИКЛИКАЛИ, ФОРМА НЕ ПЕРЕЗАГРУЖАЛА СТОРІНКУ
    //ДАЛІ ПЕРЕВІРКА НА ПУСТІ ІНПУТИ І ВИВІД АЛЕРТА
    //ЯКЩО ФОРМИ ЗАПОВНЕНІ ДАЄМО НОВЕ ЗНАЧЕННЯ В ІНПУТИ, А САМЕ ПУСТІ ІНПУТИ
    //ВИКЛИКАЄМО ФУНКЦІЮ І НАДСИЛАЄМО ДАННІ В setReview
    //ТУДИ ПЕРЕДАЄМО ФУНКЦІЮ ЯКА ПРИЙМА prevState І ПОВЕРТАЄ НОВИЙ МАСИВ ДЕ МИ ЗАПИШЕМО ПОПЕРЕДНІЙ СТЕЙТ І НОВИЙ
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (newReviews.name === '' || newReviews.text === '') {
            alert('OOOps')
        } else {
            setNewReview({
                name: '',
                text: '',
            })
            setReview((prevState) => {
                return [...prevState, newReviews]
            })
        }
    }

    console.log(newReviews)

    return (
        <>
            <Typography
                variant="h4"
                component="h2"
                align="center"
                sx={{ marginTop: '60px', marginBottom: '60px' }}
            >
                Reviews
            </Typography>

            <div className="reviews_block">
                {/* Це все має виводитись динамічно тому викликаємо МЄП. Викликаємо на reviews, поточний елемент масиву - item. Далі викликаємо карточку
            В CardContent викликаємо нєйм і текст через поточний елемент масиву item */}
                {reviews.map((item, id) => (
                    <Card key={id} variant="outlined" sx={{ margin: '30px 0' }}>
                        <CardContent>
                            <div>Name: {item.name}</div>
                            <div>{item.text}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <form onSubmit={onSend}>
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{ margin: '20px 0' }}
                >
                    Leave your Reviews here
                </Typography>
                <div>
                    <TextField
                        value={newReviews.name}
                        onChange={handleName} //ВИКЛИКАЄМО ФУНКЦІЇ ПО ЇХ МІСЦЮ
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        value={newReviews.text}
                        onChange={handleText}
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Please leave your review here"
                        style={{ width: 207 }}
                    />
                </div>
                <Button variant="contained" type="submit" color="success">
                    Send
                </Button>
            </form>
        </>
    )
}
export default Reviews
