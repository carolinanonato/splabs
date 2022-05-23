import React, { useState } from 'react'
import '../Styles/Form.scss'
import Popup from './Popup';

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [segment, setSegment] = useState("");
    const [message, setMessage] = useState("");
    const [checkbox, setCheckbox] = useState("");


    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }



    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='form' id="form">
            <h2>Não fique parado, fale conosco</h2>
            <form className="form__form-module">


                <input
                    placeholder='Seu Nome'

                    onChange={(e) => setName(e.target.value)} />


                <input placeholder='Seu email'

                    onChange={(e) => setEmail(e.target.value)} />


                <select onChange={(e) => setSegment(e.target.value)} >
                    <option value="">Seu segmento</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>

                </select>



                <textarea placeholder='Fale um pouco sobre o seu negócio'


                    onChange={(e) => setMessage(e.target.value)}></textarea>

                <div className="form__checkbox">
                    <input type="checkbox"

                        onChange={(e) => setCheckbox(e.target.value)} />
                    <label> Declaro que conheço a Política de Privacidade e autorizo a utilização das minhas informações pelo SP Labs</label>
                </div>

                <input
                    className='btn'
                    type="button"
                    value="Enviar"
                    onClick={togglePopup}
                />

                {isOpen && <Popup
                    content={<>

                        <p>Obrigado pelo contato $nome!</p>

                    </>}
                    handleClose={togglePopup}
                />}


            </form>
        </div>
    )
}

export default Form