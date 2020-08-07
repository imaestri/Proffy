import React from 'react'
import PageHeader from '../../components/pageHeader'

import './styles.css';
import Input from '../../components/Input';

import WarningIcon from '../../assets/images/icons/warning.svg';

export default function TeacherForm() {
    return (
        <div>
            <div id="page-teacher-form" className="container">
                <PageHeader
                    title="Que incrível que você quer dar aulas"
                    description="O primeiro passo é preencher esse formulário de inscrição"
                />
                <main>
                    <fieldset>
                        <legend> Seus dados</legend>
                        <Input  name="name" label="Nome Completo"/>
                        <Input  name="avatar" label="avatar"/>
                        <Input  name="whatsapp" label="whatsapp"/>
                    </fieldset>
                    <fieldset>
                        <legend> Sobre a Aula</legend>
                        <Input  name="subject" label="Matéria"/>
                        <Input  name="cost" label="Custa da sua hora por aula"/>
                    </fieldset>
                    <footer>
                        <p>
                            <img src={WarningIcon} alt="Aviso importante"/>
                            Importante! <br/>
                            Preencha todos os dados
                        </p>
                        <button type="button">
                            Salvar Cadastro
                        </button>
                    </footer>
                </main>
            </div>
        </div>
    )
}
