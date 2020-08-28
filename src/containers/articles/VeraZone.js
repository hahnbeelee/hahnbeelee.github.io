import React from "react";
import { Typography, Row, Col } from "antd";

import veraZone from "../../images/vera-zone.png";

// profile
import all3 from "../../images/verazone/profile/all3.png";
import myProfile from "../../images/verazone/profile/profile-1.gif";
import profileRedesign from "../../images/verazone/profile/profile-redesign.png";
import myRedesign from "../../images/verazone/profile/myRedesign.gif";
import myRedesignEdit from "../../images/verazone/profile/redesign-editmode.gif";
import testimonials from "../../images/verazone/profile/testimonials.png";
// onboarding
import onboardingWireframes from "../../images/verazone/onboarding/onboarding-wireframes.png";
import obinitial1 from "../../images/verazone/onboarding/onboarding-initial.png";
import obinitial2 from "../../images/verazone/onboarding/onboarding-initial-2.png";
import obinitial3 from "../../images/verazone/onboarding/onboarding-initial-3.gif";
import obinitial4 from "../../images/verazone/onboarding/onboarding-initial-4.gif";
import obinitial5 from "../../images/verazone/onboarding/onboarding-initial-5.gif";
// onboarding functionality
import textInput from "../../images/verazone/onboarding/onboarding-1.gif";
import singleChoose from "../../images/verazone/onboarding/single-choose.gif";
import multiChoice from "../../images/verazone/onboarding/multi-choice.gif";
import binaryButtons from "../../images/verazone/onboarding/binary-buttons.gif";
import only5 from "../../images/verazone/onboarding/only5.gif";

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
      <Title level={2}>What is Vera.Zone?</Title>
      <Paragraph>
        Vera.Zone is a match-making startup that curates matches based on
        personality traits and values. Vera.Zone already has 100+ users, but the
        entire system was manually handled. During the summer I was helping out,
        the founder was looking into automating the process and creating a UI
        for users to easily access the service.
      </Paragraph>
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
      <Title level={3}>Integrating react-boilerplate and Redux</Title>
      <Paragraph>
        I integrated the{" "}
        <a href="https://github.com/react-boilerplate/react-boilerplate">
          react-boilerplate
        </a>{" "}
        in order to integrate Redux. I was expected to do this because of my
        previous experience with Redux at Leidos.
      </Paragraph>
      <Title level={3}>Implementing User Profile</Title>
      <Paragraph>
        Since I had already learned React from working at Leidos I dove right
        into developing frontend - starting off with the user profile.
      </Paragraph>
      <Paragraph>
        These were the wireframes created by the design team:
      </Paragraph>
      <img src={all3} alt="profile wireframes" className="photo" />
      <Paragraph>And this is what I developed:</Paragraph>
      <img
        src={myProfile}
        alt="profile implementation version 1"
        className="photo"
      />
      <Paragraph>
        I was very proud of how similar I coded the design! However, the
        designers decided to have a redesign of the website so I had to
        re-implement it.
      </Paragraph>
      <Paragraph>The new wireframes:</Paragraph>
      <img
        src={profileRedesign}
        alt="profile redesign wireframe"
        className="photo"
      />
      <Paragraph>My new implementation:</Paragraph>
      <div className="redesign">
        <div>The redesigned UI</div>
        <img
          src={myRedesign}
          alt="profile redesign"
          className="photo"
          style={{ marginBottom: 40 }}
        />
        <div>Edit mode of the redesigned implementation</div>
        <img
          src={myRedesignEdit}
          alt="profile redesign edit mode"
          className="photo"
        />
      </div>
      <Paragraph>
        From this experience I learned to deprioritize making my UI look exactly
        like the wireframes that were provided to me. Although, getting this
        praise from the designers felt really good:
      </Paragraph>
      <img
        src={testimonials}
        className="photo"
        alt="testimonials"
        style={{ width: "25%" }}
      />
      <Paragraph>
        I was upset to learn that all the work I put into creating the first
        iteration of the profile would be gone, but ultimately when I started
        coding the redesign I learned that it wasn't much different from what I
        had before. The moral of the story is that I think the best work flow is
        to flesh out all functionality before going into the details of the
        design because the functionality is the most consistant part of the
        website.
      </Paragraph>
      <Title level={3}>Implementing Onboarding</Title>
      <Paragraph>
        Next, I implemented the onboarding process for new users. This one was
        particularly fun because there was a lot of functionality/logic problems
        to solve and I made it my goal to really implement best practices for
        forms.
      </Paragraph>
      <Title level={4}>The wireframes:</Title>
      <img
        src={onboardingWireframes}
        alt="onboarding wireframes"
        className="photo"
      />
      <Title level={4}>The implementations:</Title>
      <div className="ob-initials">
        <img src={obinitial1} alt="implementations page 1" />
        <img src={obinitial2} alt="implementations page 2" />
      </div>
      <div className="ob-initials">
        <img src={obinitial3} alt="implementations page 3" />
        <img src={obinitial4} alt="implementations page 4" />
      </div>
      <div className="ob-initials">
        <img src={obinitial5} alt="implementations page 5" />
      </div>
      <Title level={4}>The functionality:</Title>
      <div className="ob-func">
        <div>
          <div>Text Inputs</div>
          <img
            src={textInput}
            alt="text inputs"
            className="photo"
            style={{ width: 300, height: "auto" }}
          />
        </div>
        <div>
          <div>Questions where you can choose only one answer</div>
          <img
            src={singleChoose}
            alt="single choose buttons"
            className="photo"
            style={{ width: 300, height: "auto" }}
          />
        </div>
        <div>
          <div>Multi-choice button groups</div>
          <img
            src={multiChoice}
            alt="multi-choice buttons"
            className="photo"
            style={{ width: 300, height: "auto" }}
          />
        </div>
      </div>
      <div className="ob-func">
        <div>
          <div>Binary Buttons</div>
          <img
            src={binaryButtons}
            alt="binary buttons"
            className="photo"
            style={{ width: 500, height: "auto" }}
          />
        </div>
        <div>
          <div>Maximum of 5 selected</div>
          <img
            src={only5}
            alt="max 5 buttons"
            className="photo"
            style={{ width: 400, height: "auto" }}
          />
        </div>
      </div>

      <Title level={2}>Conclusion</Title>
      <Paragraph>
        I'm very happy with the frontend I developed during my time at
        Vera.Zone. This was my first time working in a start-up setting and with
        people near my age group. Working in a start-up means that you have much
        more responsibilities and flexibility to offer suggestions and improve
        the product.
      </Paragraph>
    </main>
  );
};

export default VeraZone;
