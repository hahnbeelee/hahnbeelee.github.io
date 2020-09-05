import React from "react";
import { Typography, Row, Col } from "antd";

import goodStuff from "../../images/GoodStuffLogo_2x.png";
import awsAuth from "../../images/good-stuff/auth/prior-design.jpeg";
import auth from "../../images/good-stuff/auth/auth-1.png";
import signIn from "../../images/good-stuff/auth/sign-in.png";
import signInGif from "../../images/good-stuff/auth/auth-3.gif";
import signUp from "../../images/good-stuff/auth/sign-up.png";
import logical from "../../images/good-stuff/auth/logical-rendering.png";
import userJourney from "../../images/good-stuff/sprint-2/user-journey.jpg";
import key from "../../images/good-stuff/sprint-2/user-flow-key.jpg";
import sketch1 from "../../images/good-stuff/sprint-2/sketch1.png";
import sketch2 from "../../images/good-stuff/sprint-2/sketch2.png";
import wireframes1 from "../../images/good-stuff/sprint-2/wireframes1.png";
import wireframes2 from "../../images/good-stuff/sprint-2/wireframes2.png";
import wireframes3 from "../../images/good-stuff/sprint-2/wireframes3.png";
import research from "../../images/good-stuff/sprint-3/research.png";
import conclusions from "../../images/good-stuff/sprint-3/conclusions.png";
import applications from "../../images/good-stuff/sprint-3/applications.png";
import redesign from "../../images/good-stuff/sprint-3/redesign.png";

import browse from "../../images/good-stuff/sprint-4/browse.png";
import listings from "../../images/good-stuff/sprint-4/listings.png";
import listing from "../../images/good-stuff/sprint-4/listing.png";
import requests from "../../images/good-stuff/sprint-4/requests.png";
import request from "../../images/good-stuff/sprint-4/request.png";
import profile from "../../images/good-stuff/sprint-4/profile.png";

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
    <main id="goodstuff" className="article">
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
        implemented a lot of the bare features of the app without integrating
        the company's brand. He had used AWS Amplify for the backend and for
        authentication he was using the default components provided by AWS.
        Trisha Guttal (the designer for the team) and I collaborated to create a
        new authentication flow with both of us conducting market research, her
        focusing on design, and me brining her designs to life.
      </Paragraph>
      <Paragraph>Here is the before:</Paragraph>
      <div className="center">
        <img
          src={awsAuth}
          alt="how the authentication looked before the redesign"
          style={{ width: "50%" }}
        />
      </div>
      <Paragraph>And here is the after:</Paragraph>
      <div className="centered-row" id="auth">
        <img src={auth} alt="landing screen" />
        <img src={signUp} alt="sign up screen" />
        <img src={signIn} alt="sign in screen" />
        <img src={signInGif} alt="sign in flow gif" />
      </div>
      <div className="center">
        <img
          src={logical}
          alt="auth different views"
          style={{ width: "80%", height: "auto" }}
        />
      </div>
      <Title level={3}>Sprint 2 - Designing the User Profile</Title>
      <Paragraph>
        After rebranding the authentication flow, I wasn't able to develop
        anymore because major design choices had to be made. Therefore, I
        strongly advocated for design meetings were we discussed user flow, what
        should be included in the MVP, and scope.
      </Paragraph>
      <Title level={4}>Understanding our target user</Title>
      <div className="center">
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
      <Title level={4}>Sketches & Wireframes</Title>
      <div className="center">
        <img src={sketch1} alt="sketch 1" />
      </div>
      <div className="center">
        <img src={sketch2} alt="sketch 2" />
      </div>
      <div className="center">
        <img
          src={wireframes1}
          alt="wireframes 1"
          style={{ width: "70%", height: "auto" }}
        />
      </div>
      <div className="center">
        <img
          src={wireframes2}
          alt="wireframes 2"
          style={{ width: "70%", height: "auto" }}
        />
      </div>
      <div className="center">
        <img
          src={wireframes3}
          alt="wireframes 3"
          style={{ width: "70%", height: "auto" }}
        />
      </div>
      <Title level={3}>Sprint 3 - Redesigning "Post a Request/Listing"</Title>
      <Paragraph>
        Next, I took up fully redesigning and implementing a redesign for the
        "Post a Request/Listing" feature of the app.
      </Paragraph>
      <Paragraph>I started off with some market research:</Paragraph>
      <div className="center">
        <img src={research} alt="research" />
      </div>
      <div className="center">
        <img
          src={conclusions}
          alt="conclusions"
          style={{ width: "70%", height: "auto" }}
        />
      </div>
      <div className="center">
        <img src={applications} alt="applications" />
      </div>
      <Paragraph>Then, I elevated the pre-existing UI:</Paragraph>
      <div className="center">
        <img
          src={redesign}
          alt="redesign"
          style={{ width: "70%", height: "auto" }}
        />
      </div>
      <Title level={3}>Sprint 4 - App-Wide Rebrand</Title>
      <Paragraph>
        Finally, by the last sprint, while I was working on rebranding select
        features of the app, we finally had a general redesign for the entire
        app. Although I wasn't able to implement all the redesigns I worked on
        elevating as many features as possible.
      </Paragraph>
      <div className="centered-row">
        <img
          src={browse}
          alt="browse"
          style={{ width: "210px", height: "auto" }}
        />
        <img
          src={profile}
          alt="profile"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
      <div className="centered-row">
        <img
          src={listings}
          alt="listings"
          style={{ width: "210px", height: "auto" }}
        />
        <img
          src={listing}
          alt="listing"
          style={{ width: "210px", height: "auto" }}
        />
        <img
          src={requests}
          alt="requests"
          style={{ width: "210px", height: "auto" }}
        />
        <img
          src={request}
          alt="request"
          style={{ width: "210px", height: "auto" }}
        />
      </div>
    </main>
  );
};

export default GoodStuff;
