import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './card-panel.scss';

function CardPanel({ title, children, color }) {
  return (
    <Container className='card-panel'>
      <Row>
        <Col style={{ backgroundColor: color }}>{title}</Col>
      </Row>

      <Container className='p-5'>
        <Row>{children}</Row>
      </Container>
    </Container>
  );
}

CardPanel.defaultProps = {
  color: '#43c90a',
};

export default CardPanel;
