import React from 'react';

class AllContent extends React.Component {
    render() {
        return(
            <div>
                <ul class="uk-tab" id="js-control" data-uk-tab="{connect: '#my-content'}" data-uk-dropdown="{mode:'click'}">
                    <li id="tab1"><a href="">Experience</a> </li>
                    <li id="tab2"><a href="">Classes</a> </li>
                    <li id="tab3"><a href="">Projects</a> </li>
                    <li id="tab4"><a href="">All</a> </li>
                </ul>

                <ul id="my-content" class="uk-switcher uk-margin">
                    <li>
                    Content 1
                    </li>
                    <li>Content 2</li>
                    <li>Content 3</li>
                    <li>Content 4</li>
                </ul>
            </div>
        );
    }
}

export default AllContent