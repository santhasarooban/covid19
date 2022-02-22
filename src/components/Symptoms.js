import React from 'react'
import './Symptoms.css'
function Symptoms() {
    return (
        <>
            <div className='symptoms-container'>
                <div className='div-1 cont'>
                <h1>Most Common Symptoms</h1>
                <ol>
                    <li>Fever</li>
                    <li>Cough</li>
                    <li>Tiredness</li>
                    <li>Loss of taste</li>
                </ol>
                </div>
                <div className='div-2 cont'>
                <h1>Less Common Symptoms..</h1>
                <ol>
                    <li>Sore Throat</li>
                    <li>Headache</li>
                    <li>Aches and pains</li>
                    <li>Red or irritated eyes</li>
                </ol>
                </div>
            </div>
        </>
    )
}

export default Symptoms
