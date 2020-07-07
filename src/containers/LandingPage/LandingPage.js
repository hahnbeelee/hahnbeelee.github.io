import React from 'react'
import { Link } from 'react-router-dom'

import MainContent from './MainContent'

import highlight from '../../images/highlight.svg'

const LandingPage = () => (
    <main id="landing">
        <div id="banner">
            <p id="name">
                My name is 
                <div id="hahnbee">
                    <img src={highlight} alt="highlight" />
                    <Link to='/about' id="link">
                        Hahnbee
                    </Link>
                </div>
            </p>
            <p id="me">
                I am passionate about creating elegant code and designs.
            </p>
        </div>
        <MainContent />
    </main>
)

export default LandingPage;