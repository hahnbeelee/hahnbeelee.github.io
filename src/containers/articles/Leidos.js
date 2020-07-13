import React from 'react';
import { Typography, Row, Col } from 'antd';

import leidos from '../../images/leidos.png'
const Leidos = () => {
    const { Title, Text, Paragraph } = Typography;
    return (
        <main id="leidos">
            <Row>
                <Col span={18}>
                    <Title>UI Development Internship</Title>
                    <Row gutter={100}>
                        <Col>
                            <Text strong>Date</Text> <br />
                            <Text>May 2019 - Jan 2020</Text> <br />
                        </Col>
                        <Col>
                            <Text strong>Team</Text> <br />
                            <Text>GEOAxIS</Text>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <img src={leidos} alt="leidos"/>
                </Col>
            </Row>
            <Title level={2}>Projects I Accomplished</Title>
            <Paragraph>
                <ul>
                    <li>
                        Implemented Storybook to promote reusability 
                    </li>
                    <li>
                        Implemented a user profile in the web app using React/Redux
                    </li>
                    <li>
                        Automated the deployment process using Ansible playbooks
                    </li>
                </ul>
            </Paragraph>
            <Title level={2}>Key Takeaways</Title>
            <Paragraph>
                <ul>
                    <li>
                        Began to appreciate elegant code
                    </li>
                    <li>
                        Learned React/Redux
                    </li>
                    <li>
                        Learned how to automate deployment process with Ansible playbooks
                    </li>
                    <li>
                        Experienced the scrum agile framework
                    </li>
                    <li>
                        Learned the importance of delivering to the customer
                    </li>
                </ul>
            </Paragraph>
            <Title level={2}>Timeline</Title>
            <Title level={3}>Learning React/Redux</Title>
            <Title level={3}>Implementing User Profile</Title>
            <Title level={3}>Implementing Storybook</Title>
            <Title level={3}>Automating Deployment with Ansible</Title>
        </main>
    )
}

export default Leidos