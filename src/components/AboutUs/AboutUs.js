import React from 'react'
import './AboutUs.scss'
import coronaVirus from '../../images/coronaVirus.png'

export default function AboutUs(props) {
    return (
        <section className="coronaVirusDefinition" ref={props.setRef}>
            <div className="illustration">
                <img src={coronaVirus} alt="" srcset="" />
            </div>

            <div className="definition">
                <h2>What is COVID-19?</h2>
                <h3>Corona Virus</h3>
                <p>Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.</p>

                <input type="button" value="Learn More"/>
            </div>

        </section>
    )
}
