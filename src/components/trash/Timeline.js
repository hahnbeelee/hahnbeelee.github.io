import React from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
// UIkit.notification('Hello world.');

const subnav = () => (
    <div>
        <ul id="my-id" class="uk-subnav">
            <li data-uk-filter=""><a href="">All</a></li>
            <li data-uk-filter="filter-a"><a href="">Filter A</a></li>
            <li data-uk-filter="filter-b"><a href="">Filter B</a></li>
        </ul>
        <div data-uk-grid="{controls: '#my-id'}">
            <div data-uk-filter="filter-a">A</div>
            <div data-uk-filter="filter-b">B</div>
            <div data-uk-filter="filter-a,filter-b"><p>A & B</p></div>
        </div>
    </div>
);
class Timeline extends React.Component {
    render() {
        return(
            UIkit.filter()
        );
    }

}

export default Timeline