import React from 'react'
import './Symptoms.scss'
import SymptomsImage from '../../images/symptoms.png'

export default function Symptoms(props) {
    return (
        <section className="symptoms-container" ref={props.setRef}>
            <h2>COVID-19</h2>
            <h3>Symptoms</h3>
            <p>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory</p>
            <img src={SymptomsImage} alt="" />
        </section>
    )
}
