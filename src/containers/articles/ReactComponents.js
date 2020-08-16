import React from "react";
import { Typography } from "antd";

import blog from "../../images/react-components/blog-post.png";
import search from "../../images/react-components/image-search.png";
import warning from "../../images/react-components/warning.png";
import weather from "../../images/react-components/weather.png";
const ReactComponents = () => {
  const { Title, Paragraph, Text } = Typography;
  return (
    <main id="react-components">
      <Title>Modern React with Redux</Title>
      <Paragraph>
        In the Summer of 2019, during my internship at{" "}
        <a href="/leidos">Leidos</a>, my first onboarding task was to complete
        the{" "}
        <a href="https://www.udemy.com/course/react-redux/">
          Modern React with Redux
        </a>{" "}
        Udemy course (Stephen Grider). Through this course, I was introduced to
        React for the very first time.
      </Paragraph>
      <Text strong>The Github Repo</Text>
      <Text>
        {" "}
        -{" "}
        <a href="https://github.com/hahnbeelee/react-projects">
          https://github.com/hahnbeelee/react-projects
        </a>
      </Text>
      <Title level={2}>Small Apps Made Throughout the Course</Title>
      <div id="apps">
        <div className="row">
          <div className="app">
            <img src={blog} alt="blog" />
            <Text>A "blog post" component filled with lorem ipsum data</Text>
          </div>
          <div className="app">
            <img src={search} alt="search" />
            <Text>
              A search system with a backend connected to{" "}
              <a href="https://api.unsplash.com">https://api.unsplash.com</a>
            </Text>
          </div>
        </div>
        <div className="row">
          <div className="app">
            <img src={weather} alt="weather" />
            <Text>
              A very simple site that tells you whether it's cold or hot based
              on your location.
            </Text>
          </div>
          <div className="app">
            <img src={warning} alt="warning" id="warning" />
            <Text>A Warning pop-up component</Text>
          </div>
        </div>
      </div>
      <Text strong>The Github Repo</Text>
      <Text>
        {" "}
        -{" "}
        <a href="https://github.com/hahnbeelee/react-projects">
          https://github.com/hahnbeelee/react-projects
        </a>
      </Text>
    </main>
  );
};

export default ReactComponents;
