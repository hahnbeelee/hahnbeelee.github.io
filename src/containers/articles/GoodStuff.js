import React from "react";
import { Typography, Row, Col } from "antd";
import goodStuff from "../../images/GoodStuffLogo_2x.png";

const GoodStuff = () => {
  const { Title, Text, Paragraph } = Typography;

  return (
    <main id="goodstuff">
      <Row>
        <Col span={18}>
          <Title>Full Stack Internship</Title>
          <Row gutter={100}>
            <Col>
              <Text strong>Date</Text> <br />
              <Text>March - August 2020</Text> <br />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <img src={goodStuff} alt="goodStuff" />
        </Col>
      </Row>
      <Title level={2}>Accomplishments</Title>
      <Paragraph>
        <ul>
          <li>Implemented a redesign for 90% of the app using React Native</li>
          <li>
            Conducted market and user research to determine which features to
            implement for the MVP
          </li>
          <li>
            Promoted communication between the designers and developers to
            understand the scope of the project and the designers' priorities
          </li>
          <li>Created wireframes on Figma for the app redesign</li>
        </ul>
      </Paragraph>
      <Title level={2}>Key Takeaways</Title>
      <Paragraph>
        <ul>
          <li>
            Communication between designers and developers is very important
          </li>
          <li>
            Styling in React Native forces you to make responsive frontend
            design
          </li>
          <li>
            It's best to have the designs made before frontend development.
          </li>
        </ul>
      </Paragraph>
      <Title level={2}>What is GoodStuff?</Title>
      <Paragraph>
        GoodStuff is a mobile platform that lets people share and get paid for
        their skills within university communities. Our mission is to create a
        safe and accessible sharing economy across universities, especially
        during this time of crisis and disconnection.
      </Paragraph>
      <Paragraph>
        Beta: <a href="https://www.mygoodstuff.us">www.mygoodstuff.us</a>
      </Paragraph>
      <Paragraph>
        GoodStuff was selected as one of MIT’s most promising new startups as
        part of the DesignX Venture Accelerator cohort.
      </Paragraph>
      <Title level={2}>Timeline</Title>
    </main>
  );
};

export default GoodStuff;
