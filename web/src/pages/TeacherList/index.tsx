import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg'

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="voltar" />
                    </Link>
                    <img src={logoImg} alt="logo" />
                </div>
                <div className="header-content">
                    <strong>Estes são os proffys disponíveis</strong>
                </div>
            </header>
        </div>
    )
}
