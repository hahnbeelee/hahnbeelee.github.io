import React from 'react';

import { Card, Col } from 'antd';
const { Meta } = Card;
const MyCard  = (props) => {
    let {src, title, description} = props
    const meta = {title: title, description: description};
    if(src === undefined) {
        src = "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    }
    return (
        <Col span={8} className="my-card">
            <Card
                hoverable
                style={{ width: 300 }}
                cover={
                    <img
                        alt={title}
                        src={src}
                    />
                }
            >
            <Meta {...meta} />
            </Card>
        </Col>
    );
};

export default MyCard;