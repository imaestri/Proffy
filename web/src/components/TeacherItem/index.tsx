import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

export default function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/60708221?s=460&u=cf765082a65e5a7eef95994e6efaade3f90b0b01&v=4" alt="perfil" />
                <div>
                    <strong>Isaque Maestri</strong>
                    <span> Algoritmos</span>
                </div>
            </header>
            <p>
                What is Lorem Ipsum?
                <br />  <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <footer>
                <p>
                    Preço/Hora
                <strong>R$ 80, 00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="contato" />
                        Entrar em contato
                </button>
            </footer>
        </article>
    )
}
