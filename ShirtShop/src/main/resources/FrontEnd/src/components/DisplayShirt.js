import React from 'react'
import '../styling/DisplayShirt.scss'

function DisplayShirt() {
    return (
        <div className="container d-flex justify-content-center">
            <div className="shirt-img d-flex flex-column"> 
                <img className="shirt" src="https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png"/>
                <p>12.28$</p>
                <button type="button" class="btn btn-outline-dark">Order</button>
            </div> 
        </div>
    )
}

export default DisplayShirt
