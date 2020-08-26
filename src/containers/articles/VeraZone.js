import React from "react";
import { Typography, Row, Col } from "antd";

import veraZone from "../../images/vera-zone.png";

const VeraZone = () => {
  const { Title, Text, Paragraph } = Typography;

  return (
    <main id="vera-zone">
      <Row>
        <Col span={18}>
          <Title>Full Stack Developer</Title>
          <Row gutter={100}>
            <Col>
              <Text strong>Date</Text> <br />
              <Text>April – August 2020</Text> <br />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <img src={veraZone} alt="vera.zone" />
        </Col>
      </Row>
      <Title level={2}>Projects I Accomplished</Title>
      <Paragraph>
        <ul>
          <li>Developed the Profile</li>
          <li>Developed the Onboarding flow</li>
          <li>Implemented a user profile in the web app using React/Redux</li>
        </ul>
      </Paragraph>
      <Title level={2}>Key Takeaways</Title>
      <Paragraph>
        <ul>
          <li>It's important to solidify design choices prior to developing</li>
          <li>
            Working in a start-up means you have a lot of general
            responsibilities, and it's more likely that people will depend on
            you to use your skills and experience rather than learn something
            new from scratch (although there is still a lot of learning).
          </li>
        </ul>
      </Paragraph>
      <Title level={2}>Timeline</Title>
      <Title level={3}>Implementing User Profile</Title>
      <Paragraph>TEXT</Paragraph>
      <Title level={3}>Implementing Onboarding</Title>
      <Paragraph>TEXT</Paragraph>

      <Title level={3}>Integrating react-boilerplate and Redux</Title>
      <Paragraph>TEXT</Paragraph>
      <Title level={2}>Conclusion</Title>
      <Paragraph>TEXT</Paragraph>
    </main>
  );
};

export default VeraZone;
