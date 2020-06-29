import React from 'react';

import headshot from '../../images/headshot.png';

import MainContent from './MainContent';

class LandingPage extends React.PureComponent {
    render() {
        return (
            <div>
                <div class="parent uk-flex uk-padding-large uk-flex-center uk-grid-match uk-margin-auto" uk-height-match>
                    <div class="text uk-text-center uk-padding">
                        <p>
                            I am Hahnbee Lee. I am an undergraduate at Cornell University double majoring in 
                            Information Science & Computer Science and minoring in Law & Society. I am a
                            creative as well as a technical person.
                        </p>
                    </div>
                    <img class="uk-align-right@m uk-margin-remove-adjacent headshot" src={headshot} alt="Hahnbee's headshot"></img>
                </div> 
                <MainContent />
            </div>
        );
    }
}

export default LandingPage;