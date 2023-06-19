import { Container, FormGroup, Grid } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import './DiscountInputs.scss'
import React, { useState } from 'react'
import axios from 'axios'

type Props = {}
type Input = {
    name: string
    email: string
}
const DiscountInputs = (props: Props) => {
    const [isFieldSend, setIsFieldSend] = useState<boolean>(false)

    const [inputData, setInputData] = useState<Input>({
        name: '',
        email: '',
    })

    const renderForm = () => {
        return (
            <form className="DiscountInputsForm" onSubmit={onFormSend}>
                <h5 className="DiscountInputsFormTitle">Join our newsletter</h5>
                <input
                    className="DiscountInputsFormInputName"
                    type="text"
                    placeholder="Name"
                    value={inputData.name}
                    onChange={handleName}
                />
                <input
                    className="DiscountInputsFormInputEmail"
                    type="email"
                    placeholder="Email"
                    value={inputData.email}
                    onChange={handleEmail}
                />
                <button className="DiscountInputsFormButton" type="submit">
                    Subscribe
                </button>
            </form>
        )
    }

    const renderOk = () => {
        return (
            <div className="DiscountInputsOkBlock">
                <h3 className="DiscountInputsOkBlockTitle">
                    You have successfully completed and submitted the form
                </h3>
                <img
                    className="DiscountInputsOkBlockImg"
                    src="https://assets.stickpng.com/images/586383a07d90850fc3ce290f.png"
                    alt="checkImg"
                />
            </div>
        )
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputData((prevState) => ({
            ...prevState,
            email: e.target.value,
        }))
    }

    const onFormSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (inputData.name === '' || inputData.email === '') {
            alert('Please fill in all fields') //1
            return
        }
        axios
            .post('https://jsonplaceholder.typicode.com/posts', {
                name: inputData.name,
                email: inputData.email,
            })
            .then((res) => res.data)
            .then(({ name, email }) => {
                setInputData({
                    name,
                    email,
                })
                setIsFieldSend(true)
            })
    }
    return (
        <div className="DiscountInputs">
            <Container sx={{ padding: '20px 0' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6}>
                        <div className="leftSide">
                            <p className="DiscountInputsParagraph">
                                Sign up for the newsletter
                            </p>
                            <h2 className="DiscountInputsTitle">
                                Receive a
                                <span style={{ backgroundColor: 'orange' }}>
                                    10%
                                </span>
                                discount on your purchases
                            </h2>

                            <div className="checkboxBlock">
                                <FormControl component="fieldset">
                                    <FormGroup
                                        aria-label="position"
                                        row
                                        className="FormGroup"
                                    >
                                        <FormControlLabel
                                            value="top"
                                            control={<Checkbox checked />}
                                            label="Varius eget ultricies"
                                            sx={{
                                                color: 'white',
                                            }}
                                            labelPlacement="end"
                                        />

                                        <FormControlLabel
                                            value="top"
                                            control={<Checkbox checked />}
                                            label="Suspendisse nunc"
                                            sx={{
                                                color: 'white',
                                                fontSize: '20px',
                                                lineHeight: '28px',
                                                fontWeight: '500',
                                                letterSpacing: 0,
                                            }}
                                            labelPlacement="end"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <div className="rightSide">
                            {isFieldSend ? renderOk() : renderForm()}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default DiscountInputs

//1
// Из-за отсутствия оператора return после вызова alert, код будет
//продолжать выполняться даже после отображения алерта.

// В данном случае, если поля не заполнены, вы все равно хотите остановить дальнейшее
//выполнение кода, чтобы форма не отправлялась. Использование оператора return после вызова
//alert прерывает выполнение функции onFormSend и предотвращает отправку формы.

// Когда return используется без значения, как в данном случае, он просто прерывает выполнение
//функции и возвращает undefined. Это позволяет избежать отправки формы в случае пустых полей.

// Таким образом, важно использовать return после вызова alert('Please fill in all fields'),
//чтобы остановить выполнение функции и предотвратить отправку формы при пустых полях.
