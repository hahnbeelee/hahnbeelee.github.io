import React from 'react';

import { Tabs, Card, Avatar } from 'antd';
import { ReadOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Meta } = Card;

class MainContent extends React.Component {
    readLeidos() {
        window.open("https://www.google.com");
    }
    render () {
        return (
            <div>
                <Tabs tabPosition="left">
                    <TabPane tab="All" key="1">
                        {/* add link later when page is created */}
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                            }
                            onClick={this.readLeidos}
                        >
                            <Meta
                                title="Leidos"
                                description="UI Development Intern"
                            />
                        </Card>
                    </TabPane>
                    <TabPane tab="Experience" key="2">
                        Content of Tab 2
                    </TabPane>
                    <TabPane tab="Classes" key="3">
                        Content of Tab 3
                    </TabPane>
                    <TabPane tab="Projects" key="4">
                        Content of Tab 4
                    </TabPane>
                </Tabs>
            </div>
        );
    }
};

export default MainContent