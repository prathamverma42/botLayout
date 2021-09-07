import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4';
import Message from './message';

const Home = () => {
  const [boxtype, setBoxtype] = useState('Box1');
  const [content, setContent] = useState('sdgdsgsdg');
  useEffect(() => {}, [content]);
  return (
    <Container>
      <div
        style={{
          marginTop: '20%',
          marginleft: '40%',
          border: '2px black solid',
        }}
      >
        <Row>
          <Col sm={2}>
            <Row className="m-5">
              <Button
                onClick={(e) => {
                  setBoxtype('Box1');
                }}
              >
                Box1
              </Button>
            </Row>
            <Row className="m-5">
              <Button
                onClick={(e) => {
                  setBoxtype('Box2');
                }}
              >
                Box2
              </Button>
            </Row>
            <Row className="m-5">
              <Button
                onClick={(e) => {
                  setBoxtype('Box3');
                }}
              >
                Box3
              </Button>
            </Row>
            <Row className="m-5">
              {' '}
              <Button
                onClick={(e) => {
                  setBoxtype('Box4');
                }}
              >
                Box4
              </Button>
            </Row>
          </Col>
          <Col sm={8} className="m-5">
            <Row>
              {' '}
              <div>
                {boxtype === 'Box1' ? (
                  <Box1 />
                ) : boxtype === 'Box2' ? (
                  <Box2 />
                ) : boxtype === 'Box3' ? (
                  <Box3 />
                ) : (
                  <Box4 />
                )}{' '}
              </div>
            </Row>
            <Row className="mt-5">
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    placeholder="Enter your message"
                    onChange={(e) => setContent(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Button variant="info">Send</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Message text={content} />
    </Container>
  );
};

export default Home;
