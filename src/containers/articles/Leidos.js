import React from "react";
import { Typography, Row, Col } from "antd";

import leidos from "../../images/leidos.png";
import profile from "../../images/geoaxis-profile.png";

const Leidos = () => {
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
          <img src={leidos} alt="leidos" />
        </Col>
      </Row>
      <Title level={2}>Projects I Accomplished</Title>
      <Paragraph>
        <ul>
          <li>Implemented Storybook to promote reusability</li>
          <li>Implemented a user profile in the web app using React/Redux</li>
          <li>Automated the deployment process using Ansible playbooks</li>
        </ul>
      </Paragraph>
      <Title level={2}>Key Takeaways</Title>
      <Paragraph>
        <ul>
          <li>Began to appreciate elegant code</li>
          <li>Learned React/Redux</li>
          <li>
            Learned how to automate deployment process with Ansible playbooks
          </li>
          <li>Experienced the scrum agile framework</li>
          <li>Learned the importance of delivering to the customer</li>
        </ul>
      </Paragraph>
      <Title level={2}>Timeline</Title>
      <Title level={3}>Learning React/Redux</Title>
      <Paragraph>
        For onboarding, my first task was to learn React/Redux by taking the{" "}
        <a href="https://www.udemy.com/course/react-redux/">
          {" "}
          Modern React with Redux Udemy course (Stephen Grider)
        </a>{" "}
        . Through this course, I started my journey with React/Redux and learned
        how to make basic components, set up redux, a foundational file
        structure, best practices, and code reusability. Click{" "}
        <a href="/react-components">here</a> to see some of the small web apps I
        made during this onboarding/learning experience.
      </Paragraph>
      <Title level={3}>Implementing User Profile</Title>
      <Paragraph>
        During my time at Leidos, the GEOAxIS team was in the process of
        redesigning and upgrading their Identity Management (Idam) service
        provided to the National Geospatial Agency (NGA). The website's UI was
        very outdated and implemented without javascript and was in need of an
        update.
      </Paragraph>
      <Paragraph>
        Thus, I was assigned to implement the user profile section of the
        redesign. I started off with receiving the wireframes from the UX team
        and analyzing the code base and determining which components already
        existed.
      </Paragraph>
      <div style={styles.center}>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vTRzy5mG0ndYIsRwgAZzjo9NIRxnV6W6jxW35n59cDxhHKPpYUGj-WIrRXpYeXXyz8pp_n4AcUdA40S/embed?start=false&loop=false&delayms=3000"
          frameborder="0"
          width="960"
          height="569"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          title="component map"
        ></iframe>
      </div>
      <Paragraph>
        Unfortunately, the <a href="https://geoaxis.nga.mil/">website</a> is not
        accessible unless you have the correct credentials, but I do have this
        single screenshot of my creation:
      </Paragraph>
      <div style={styles.center}>
        <img src={profile} alt="profile" style={{ width: 900 }} />
      </div>
      <Paragraph>
        The show more/less buttons are interactive, and all the information
        displayed was hooked up using redux. It was predicted that this would
        take me an entire sprint to complete, but I ended up completing it in 2
        days!
      </Paragraph>
      <Title level={3}>Implementing Storybook</Title>
      <Paragraph>
        Then, I was assigned to add{" "}
        <a href="https://storybook.js.org/">Storybook</a> to the codebase.
        Storybook is a UI component library. For our team, we specifically
        wanted it because our components folder was getting quite large and it
        was getting harder to promote reusability and decrease repeat code.
        Additionally, Storybook would allow the UX team to test and judge the
        front-end developers' implementation of their designs.
      </Paragraph>
      <Title level={3}>Automating Deployment with Ansible</Title>
      <Paragraph>
        Lastly, I dabbled in some DevOps by helping out with automating the
        deployment process. Since we were in the process of a rapid redesign
        (with an encroaching deadline), it was important that stakeholders and
        other teams can easily view our progress. Therefore, I automated a once
        manual process by creating Ansible playbooks and adding them to the
        Ansible Tower.
      </Paragraph>
      <Title level={2}>Conclusion</Title>
      <Paragraph>
        Overall, I learned a lot from this experience and am very thankful for
        it! On top of gaining all of my technical skills, my biggest takeaway
        was the experience of working in a rapid agile development process. This
        was my first time creating PR's, and after many painful group projects
        with merge conflicts, I really appreciated the process and began to
        appreciate elegant code as I was getting more direct criticism on my
        code on a weekly basis. I enjoyed the communication the team had through
        daily standups and how it was a supportive learning environment.
      </Paragraph>
    </main>
  );
};

export default Leidos;
