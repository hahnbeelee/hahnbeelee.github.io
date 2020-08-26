import React from "react";
import { Row, Typography, Col, Divider } from "antd";
import Skill from "../components/Skill";

// photos
import canva from "../images/skills/canva.png";
import css3 from "../images/skills/css.png";
import figma from "../images/skills/figma.png";
import html from "../images/skills/html.png";
import java from "../images/skills/java.png";
import jquery from "../images/skills/jquery.png";
import js from "../images/skills/js.png";
import jupyter from "../images/skills/jupyter.png";
import nodejs from "../images/skills/nodejs.png";
import ocaml from "../images/skills/ocaml.png";
import php from "../images/skills/php.png";
import premiere from "../images/skills/premiere.png";
import python from "../images/skills/python.png";
import react from "../images/skills/react.png";
import redux from "../images/skills/Redux.png";
import sass from "../images/skills/sass.png";
import vscode from "../images/skills/vscode.png";

const Skills = () => {
  const { Title } = Typography;

  return (
    <main>
      <Title>Skills</Title>
      <div className="para-title">Languages</div>
      <Row>
        <Skill pic={java} title="Java" />
        <Skill pic={js} title="JavaScript" />
        <Skill pic={python} title="Python" />
        <Skill pic={html} title="HTML5" />
        <Skill pic={css3} title="CSS3" />
        <Skill pic={ocaml} title="OCaml" />
        <Skill pic={php} title="PHP" />
      </Row>
      <Divider />
      <div className="para-title">Frameworks</div>
      <Row>
        <Skill pic={react} title="React" />
        <Skill pic={redux} title="Redux" />
        <Skill pic={jquery} title="jQuery" />
      </Row>
      <Divider />

      <Row>
        <Col>
          <div className="para-title" style={{ marginLeft: 10 }}>
            Design
          </div>
          <Row>
            <Skill pic={figma} title="Figma" />
            <Skill pic={canva} title="Canva" />
            <Skill pic={premiere} title="Premiere Pro" />
            <span className="divider" />
          </Row>
        </Col>
        <Col>
          <div className="para-title" style={{ marginLeft: 10 }}>
            Tools
          </div>
          <Row>
            <Skill pic={nodejs} title="Node" />
            <Skill pic={vscode} title="VSCode" />
            <span className="divider" />
          </Row>
        </Col>
        <Col>
          <div className="para-title" style={{ marginLeft: 10 }}>
            Preprocessors
          </div>
          <Row>
            <Skill pic={sass} title="Sass" />
            <span className="divider" />
          </Row>
        </Col>
        <Col>
          <div className="para-title" style={{ marginLeft: 10 }}>
            Data Science
          </div>
          <Row>
            <Skill pic={jupyter} title="Jupyter" />
          </Row>
        </Col>
      </Row>
    </main>
  );
};

export default Skills;
