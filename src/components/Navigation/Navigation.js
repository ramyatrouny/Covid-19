import React from 'react'
import './Navigation.scss'
// Images
import Logo from '../../images/Logo.png'

export default function Navigation(props) {
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

    return (
        <nav>
            <img src={Logo} alt="" />

            <ul>
                <li onClick={() => scrollToRef(props.overview)}>
                    <p>Overview</p>
                </li>

                <li onClick={() => scrollToRef(props.transmission)}>
                    <p>Transmission</p>
                </li>

                <li onClick={() => scrollToRef(props.symptoms)}>
                    <p>Symptoms</p>
                </li>

                <li onClick={() => scrollToRef(props.overview)}>
                    <p>Prevention</p>
                </li>

                <li>
                    <input type="button" value="Contact" />
                </li>

            </ul>
        </nav>
    )
}
