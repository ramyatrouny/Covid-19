import React from 'react'
import './Navigation.scss'
// Images
import Logo from '../../images/Logo.png'

export default function Navigation() {
    return (
        <nav>
            <img src={Logo} />

            <ul>
                <li>
                    <p>Overview</p>
                </li>

                <li>
                    <p>Contagion</p>
                </li>

                <li>
                    <p>Symptoms</p>
                </li>

                <li>
                    <p>Prevention</p>
                </li>

                <li>
                    <input type="button" value="Contact" />
                </li>

            </ul>
        </nav>
    )
}
