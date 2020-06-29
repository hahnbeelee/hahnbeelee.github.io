import React from 'react';

import { Card, Col } from 'antd';
const { Meta } = Card;
const MyCard  = (props) => {
    const meta = {title: props.title, description: props.description};
    return (
        <Col span={8} className="my-card">
            <Card
                hoverable
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
            >
            <Meta {...meta} />
            </Card>
        </Col>
    );
};

export default MyCard;