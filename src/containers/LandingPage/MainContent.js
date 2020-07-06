import React, {useState} from 'react'

import { Tabs, Row, Typography , Radio, Divider } from 'antd'
import MyCard from '../../components/MyCard'

// data
import content from '../../data/content.json'

const MainContent = () => {
    //components
    const { TabPane } = Tabs
    const { Title } = Typography

    //data
    const filters = ['Category', 'Alphabetical'] //, 'Amount of Content', 'Chronological'

    //state
    const [value, setValue] = useState('Category')

    //functions

    const onChange = e => {
        setValue(e.target.value)
    }

    const createCards = (group, isType) => {
        let cards = []
        const dataType = isType ? 'type' : 'category'
        for(let i=0; i<content.length; i++){
            if(content[i][dataType] === group){
                cards.push(
                    <MyCard 
                        title= {content[i].title}
                        description={content[i].description}
                        src={content[i].src}
                        to={content[i].to}
                    />
                )
            }
        }
         
        return(
           <Row>
               {cards}
           </Row> 
        ) 
    }

    const createCategories = () => {
        const categories = ['Coding', 'Data Science', 'Information Science', 'Law']
        let formattedCats = categories.map((category) =>
            <div>
                <Divider />
                <Title level={3}>{category}</Title>
                {createCards(category, false)}
            </div>
        );
        formattedCats[0] = (
            <div>
                <Title level={3}>{categories[0]}</Title>
                {createCards(categories[0], false)}
            </div>
        )
        return (
            <div>
                {formattedCats}
            </div>
        )
    }

    const createClasses = (filter) => {
        if(filter === 'Category'){
           return createCategories()
        } else if(filter === 'Alphabetical'){
            // get all classes
            let classes = []
            for(let i=0; i<content.length; i++){
                if(content[i].type === 'Classes'){
                    classes.push(content[i])
                }
            }
            classes.sort((a, b) => a.title.localeCompare(b.title)) //sort alphabetically
            // format
            let formatted = []
            for(let clas of classes){
                formatted.push(
                    <MyCard 
                        title= {clas.title}
                        description={clas.description}
                    />
                )
            }
            return (
                <Row>
                    {formatted}
                </Row>
            )
        }
    }


    
    return (
        <div id="main-content">
            <Tabs>

                <TabPane tab="Experience" key="1">
                    {/* add link later when page is created */}
                    {/* include react projects! */}
                    {createCards('Experience', true)}
                </TabPane>

                <TabPane tab="Projects" key="2">
                    {createCards('Projects', true)}
                </TabPane>

                <TabPane tab="Classes" key="3">

                    <p>Filter By:</p>
                    <Radio.Group 
                        options={filters} 
                        onChange={onChange}
                        value={value}
                    />
                    <Divider />
                    {createClasses(value)}
                    
                </TabPane>

                <TabPane tab="All" key="4">
                    {createCards('Experience', true)}
                    {createCards('Projects', true)}
                    {createCards('Classes', true)}
                </TabPane>
            </Tabs>
        </div>
    )
}

export default MainContent