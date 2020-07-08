import React from 'react'

import { Typography, Row, Col, Divider } from 'antd'

const About = () => {
    const {Title, Paragraph} = Typography
    return (
        <main>
            <Title>About Me</Title>
            <Title level={2}>My name is <b>Hahnbee Lee.</b></Title>
            <Title level={2}>I am...</Title>
            <Row>
                <Col span={12}>
                    <div className="para-title">A student at Cornell University.</div>
                    <Paragraph className="about-para">
                        Majors: Computer Science, <br />
                        Information Science (User Experience) <br />
                        Minor: Law & Society
                    </Paragraph>
                </Col>
                <Col span={12}>
                    <div className="para-title">Located in:</div>
                    <Paragraph className="about-para">
                        Ithaca, NY | Annandale, VA.
                    </Paragraph>
                </Col>
            </Row>
            <Row>
                <Col span={12} className="para-title">A Developer.</Col>
                <Col span={12} className="para-title">A Coder.</Col>
            </Row>
            <Row>
                <Col span={12} className="para-title">A Designer.</Col>
                <Col span={12} className="para-title">A Data Scientist.</Col>
            </Row>
            <Divider />
            <Title level={2}>You can find me on...</Title>
            <Paragraph className="about-para">
                linkedIn | github | medium | vsco.
            </Paragraph>
            <div className="para-title about-para">And contact me at HL985@cornell.edu</div>
        </main>
    )
}

export default About