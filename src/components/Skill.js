import React from "react";
import { Card, Col } from "antd";

const { Meta } = Card;
const Skill = (props) => {
  const { title, pic } = props;
  return (
    <Col>
      <Card
        style={{ width: 150, margin: 10 }}
        cover={
          <img alt={title} src={pic} style={{ height: 150, padding: 20 }} />
        }
      >
        <Meta title={title} style={{ textAlign: "center" }} />
      </Card>
    </Col>
  );
};

export default Skill;
