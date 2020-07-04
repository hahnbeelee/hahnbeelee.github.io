import React from 'react'

import { Tabs, Row, Checkbox } from 'antd'
import MyCard from '../../components/MyCard'
import content from '../../data/content.json'

const { TabPane } = Tabs

// e.target.checked
const MainContent = () => {
    const createCards = (data) => {
        let cards = []
        for(var i=0; i<data.length; i++){
            cards.push(
                <MyCard 
                    title= {data[i].title}
                    description={data[i].description}
                />
            )
        }
        return cards
    }
    return (
        <div id="main-content">
            <Tabs>
                <TabPane tab="Experience" key="1">
                    {/* add link later when page is created */}
                    {/* include react projects! */}

                    <Row>
                        {createCards(content.experiences)}
                    </Row>
                </TabPane>
                <TabPane tab="Projects" key="2">
                    <Row>
                        {createCards(content.projects)}
                    </Row>
                </TabPane>
                <TabPane tab="Classes" key="3">
                    {/* most relevant */}
                    <Checkbox>Relevance</Checkbox>
                    <Row>
                        {createCards(content.classes)}
                    </ Row>
                </TabPane>
                <TabPane tab="All" key="4">
                    <Row>
                        {createCards(content.experiences)}
                        {createCards(content.projects)}
                        {createCards(content.classes)}
                    </Row>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default MainContent

// <MyCard 
//     title="Intro to Data Science"
//     description="Skills: jupyter notebooks,......"
// /> {/* final project, psets = password protected */}
// <MyCard 
//     title="Functional Programming"
//     description="Language: OCaml"
// /> {/* final project, psets = pw protected */}
// <MyCard 
//     title="Obj-Oriented Programming"
//     description="Language: java"
// /> {/* psets = pw protected */}