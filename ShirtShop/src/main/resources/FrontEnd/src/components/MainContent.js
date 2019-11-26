import React from 'react'
import s from '../styling/MainContent.module.scss'
import DisplayShirt from './DisplayShirt'
function MainContent() {
    return (
        <div className="Main d-flex align-items-center flex-column">
            <h1 className={`${s.landingMessage}`}>Make your shirt!</h1>
            <DisplayShirt/>
        </div>
    )
}

export default MainContent
