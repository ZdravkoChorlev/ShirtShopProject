import React from 'react'
import '../styling/MainContent.scss'
import DisplayShirt from './DisplayShirt'
function MainContent() {
    return (
        <div className="Main d-flex align-items-center flex-column">
            <h1>Make your shirt!</h1>
            <DisplayShirt/>
        </div>
    )
}

export default MainContent
