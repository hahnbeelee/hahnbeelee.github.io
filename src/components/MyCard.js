import React from "react";
import { Link } from "react-router-dom";

import { Card, Col } from "antd";

const MyCard = props => {
  const { Meta } = Card;
  let { to, src, title, description } = props;
  const meta = { title: title, description: description };
  if (src === "") {
    return (
      <Col span={8} className="my-card">
        <Link to={to}>
          <Card style={{ width: 300 }}>
            <Meta {...meta} />
          </Card>
        </Link>
      </Col>
    );
  }
  return (
    <Col span={8} className="my-card">
      <Link to={to}>
        <Card
          hoverable
          style={{ width: 300 }}
          cover={<img alt={title} src={src} />}
        >
          <Meta {...meta} />
        </Card>
      </Link>
    </Col>
  );
};

MyCard.defaultProps = {
  to: "/",
  src: "",
};

export default MyCard;
