import React from "react";
import { Typography } from "antd";
import MainContent from "./LandingPage/MainContent";
const Work = () => {
  const { Title } = Typography;

  return (
    <main>
      <Title>My Work</Title>
      <MainContent />
    </main>
  );
};

export default Work;
