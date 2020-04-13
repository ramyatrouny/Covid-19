import React from 'react'
import './Transmission.scss';

import airTransmission from '../../images/Transmission/airTransmission.png';
import humanContact from '../../images/Transmission/humanContact.png';
import containedObjects from '../../images/Transmission/containedObjects.png';

export default function Transmission() {
    return (
        <section className="transmission-container">
            <h2>COVID-19</h2>
            <h3>Transmission</h3>
            <p>Coronavirus is spread through droplets released into the air when an infected person coughs or sneezes.</p>

            <div className="coronaTransmissionCards">
                <div className="transmissionCard">
                    <img src={airTransmission} alt="" srcset="" />
                    <h3>Air Transmission</h3>
                    <p>Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify</p>
                </div>
                <div className="transmissionCard">
                    <img src={humanContact} alt="" srcset="" />
                    <h3>Human Contact</h3>
                    <p>Washing your hands is one of the simplest ways you can protect yourself</p>
                </div>
                <div className="transmissionCard">
                    <img src={containedObjects} alt="" srcset="" />
                    <h3>Contained Objects</h3>
                    <p>Use the tissue while sneezing,In this way, you can protect your droplets.</p>
                </div>
            </div>
        </section>
    )
}
