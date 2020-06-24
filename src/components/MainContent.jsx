import React from 'react';

import { Tabs, Card, Avatar } from 'antd';
import MyCard from './MyCard';
const { TabPane } = Tabs;


class MainContent extends React.Component {

    render () {
        return (
            <div>
                <Tabs>
                    <TabPane tab="Experience" key="1">
                        {/* add link later when page is created */}
                        {/* include react projects! */}
                        <MyCard 
                            title="Leidos"
                            description="UI Development Intern"
                        />
                        <MyCard 
                            title="Scriyb LLC"
                            description="Algorithm Developer"
                        />
                        <MyCard 
                            title="Vera.Zone"
                            description="Front-End Developer"
                        />
                    </TabPane>
                    <TabPane tab="Projects" key="2">
                        <MyCard 
                            title="Cornell Rocketry Team"
                            description="Engineering Project Team"
                        />
                        <MyCard 
                            title="Medium Design Collective"
                            description="Restroom Signage Redesign"
                        />
                        <MyCard 
                            title="PWC Mutual Aid Group"
                            description="Web Developer"
                        />
                        <MyCard 
                            title="React Components"
                            description="Web Developer"
                        />
                        <MyCard 
                            title="Cornell Eastern Music Ensemble"
                            description="Webmaster"
                        />
                    </TabPane>
                    <TabPane tab="Classes" key="3">
                        {/* most relevant */}
                       <MyCard 
                            title="Intro Design & Prog for Web"
                            description="Skills: HTML, CSS, javascript, jQuery"
                        />
                        <MyCard 
                            title="Intmd. Design & Prog for Web"
                            description="Skills: HTML, CSS,PHP, MySQL"
                        />
                        <MyCard 
                            title="Intro to Data Science"
                            description="Skills: jupyter notebooks,......"
                        /> {/* final project, psets = password protected */}
                        <MyCard 
                            title="Functional Programming"
                            description="Language: OCaml"
                        /> {/* final project, psets = pw protected */}
                        <MyCard 
                            title="Obj-Oriented Programming"
                            description="Language: java"
                        /> {/* psets = pw protected */}
                    </TabPane>
                    <TabPane tab="All" key="4">
                        Content of Tab 4
                    </TabPane>
                </Tabs>
            </div>
        );
    }
};

export default MainContent