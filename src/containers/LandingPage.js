import React from 'react';

import headshot from '../images/headshot.png';
import '../styles/landingPage.css';
class LandingPage extends React.PureComponent {
    render() {
        return (
            <div class="parent uk-flex uk-padding-large uk-flex-center uk-grid-match uk-margin-auto" uk-height-match>
                <img class="uk-align-right@m uk-margin-remove-adjacent headshot" src={headshot} alt="Hahnbee's headshot"></img>
                <div class="text uk-text-center uk-padding">
                    <p>
                        Hello! I am Hahnbee! I am an undergraduate at Cornell University majoring in 
                        Information Science & Computer Science and minoring in Law & Society. I am a
                        creative as well as a technical person.
                    </p>
                </div>
            </div> 
        );
    }
}

export default LandingPage;