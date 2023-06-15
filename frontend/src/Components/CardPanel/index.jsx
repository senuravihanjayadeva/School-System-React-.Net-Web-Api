import React from "react";
import { Card, Container, CardBody, Row, Col } from "reactstrap";
import "./card-panel.scss";

function CardPanel({ title, children }) {
  return (
    <Container className="card-panel">
      <Row>
        <Col style={{ backgroundColor: "green" }}>{title}</Col>
      </Row>

      <Container className="p-5">
        <Row>{children}</Row>
      </Container>
    </Container>
  );
}

export default CardPanel;
