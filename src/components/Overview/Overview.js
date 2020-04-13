import React from 'react'
import './Overview.scss'

import GirlSitting from '../../images/sittingGirl.png'

export default function Overview() {
    return (
        <section className="overview-container">
            <div className="definition">
                <h2>COVID-19 Alert</h2>
                <h1>Quarantine at home <br/> to stop Corona virus</h1>
                <h4>There is no specific medicine to prevent or treat coronavirus <br/> disease (COVID-19). People may need supportive care to</h4>
                <input type="button" value="Let Us Help"/>
            
            </div>

            <div className="illustration">
                <img src={GirlSitting} alt="" srcset=""/>
            </div>

        </section>
    )
}
