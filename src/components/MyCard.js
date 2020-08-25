import React from "react";

import { Card, Col } from "antd";

const MyCard = (props) => {
  const { Meta } = Card;
  let { to, src, title, description } = props;
  const meta = { title: title, description: description };
  if (src === "") {
    return (
      <Col span={8} className="my-card">
        <a href={to}>
          <Card style={{ width: 300 }}>
            <Meta {...meta} />
          </Card>
        </a>
      </Col>
    );
  }
  return (
    <Col span={8} className="my-card">
      <a href={to}>
        <Card
          hoverable
          style={{ width: 300 }}
          cover={<img alt={title} src={src} />}
        >
          <Meta {...meta} />
        </Card>
      </a>
    </Col>
  );
};

MyCard.defaultProps = {
  to: "/",
  src: "",
};

export default MyCard;
