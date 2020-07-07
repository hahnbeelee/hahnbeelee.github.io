import React from 'react'
import { Link } from 'react-router-dom'

import MainContent from './MainContent'

const LandingPage = () => (
    <main id="landing">
        <p id="name">
            My name is <Link to='/about'>Hahnbee</Link>
        </p>
        <p id="me">
            I am passionate about creating elegant code and designs.
        </p>
        <MainContent />
    </main>
)

export default LandingPage;