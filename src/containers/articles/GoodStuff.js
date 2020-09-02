import React from "react";
import { Typography, Row, Col } from "antd";

import goodStuff from "../../images/GoodStuffLogo_2x.png";
import awsAuth from "../../images/good-stuff/auth/prior-design.jpeg";
import userJourney from "../../images/good-stuff/sprint-2/user-journey.jpg";
import key from "../../images/good-stuff/sprint-2/user-flow-key.jpg";

const GoodStuff = () => {
  const { Title, Text, Paragraph } = Typography;

  const styles = {
    center: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      marginBottom: 20,
    },
  };

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
        <a href="https://www.mygoodstuff.us">GoodStuff</a> is a mobile platform
        that lets people share and get paid for their skills within university
        communities. Our mission is to create a safe and accessible sharing
        economy across universities, especially during this time of crisis and
        disconnection.
      </Paragraph>
      <Paragraph>
        GoodStuff was selected as one of MIT’s most promising new startups as
        part of the DesignX Venture Accelerator cohort.
      </Paragraph>
      <Title level={2}>Timeline</Title>
      {/* TODO : ADD PEOPLE'S LINKEDIN LINKS */}
      <Title level={3}>Sprint 1 - Authentication Flow</Title>
      <Paragraph>
        Prior to my joining the GoodStuff team, Reef Loretto had already
        implemented a lot of the bare features of the app without styling. He
        had used AWS Amplify for the backend and for authentication he was using
        the default components provided by AWS. Trisha Guttal (the designer for
        the team) and I collaborated to create a new authentication flow with
        both of us conducting market research, her focusing on design, and me
        brining her designs to life.
      </Paragraph>
      <Paragraph>Here is the before:</Paragraph>
      {/* INSERT PICTURES */}
      <div style={styles.center}>
        <img
          src={awsAuth}
          alt="how the authentication looked before the redesign"
          style={{ width: "50%" }}
        />
      </div>
      <Paragraph>And here is the after:</Paragraph>
      <Title level={3}>Sprint 2 - Designing the User Profile</Title>
      <Title level={4}>Understanding our target user</Title>
      <div style={styles.center}>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vRv7IRRoKnYq0zaxoEjHwBzxkhDoEr3NqHUuj2xJk-eDNT_8ZFSY4_WHf0KJUNhWJLWoBpzGBUwmA1r/embed?start=true&loop=true&delayms=3000"
          frameborder="0"
          width="960"
          height="569"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          title="user profile"
        ></iframe>
      </div>
      <Title level={4}>Miro User Flow</Title>
      <Paragraph>
        Jeremy, one of the co-founders, created a Miro board to help the team
        see the big picture. I color-coded and added a key to better our
        understanding of the scope of the project.
      </Paragraph>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={styles.center}>
          <img
            src={key}
            alt="key for the user journey"
            style={{ width: "50%" }}
          />
        </div>
        <div style={styles.center}>
          <img src={userJourney} alt="user journey" />
        </div>
      </div>
      <Paragraph>
        Link to the entire Miro board:{" "}
        <a href="https://miro.com/app/board/o9J_kqZtjPw=/">
          https://miro.com/app/board/o9J_kqZtjPw=/
        </a>
      </Paragraph>
      <Title level={4}>Wireframes</Title>
    </main>
  );
};

export default GoodStuff;
