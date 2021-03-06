import React from 'react'
import './Footer.scss'

import Logo from '../../images/Logo.png'

export default function Footer() {
    return (
        <footer>
            <img src={Logo} alt=""  />

            <ul>
                <li>
                    <p>Overview</p>
                </li>
                <li>
                    <p>Symptoms</p>
                </li>
                <li>
                    <p>Prevention</p>
                </li>
                <li>
                    <p>Treatment</p>
                </li>
                <li>
                    Developed by: <a href="https://twitter.com/Ramyatrouny" rel="noopener noreferrer" target="_blank">@ramyatrouny</a>
                </li>
            </ul>
        </footer>
    )
}
