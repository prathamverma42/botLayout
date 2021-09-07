import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4';
import Message from './message';
import Widget1 from './Widget1';

const Home = () => {
  var i = 0;
  const [boxtype, setBoxtype] = useState('Box1');
  const [content, setContent] = useState('');
  const user_data = [
    {
      data: 'hello',
      isme: true,
    },
    {
      data: 'hello424',
      isme: false,
    },
    {
      data: 'hello24',
      isme: true,
    },
    {
      data: 'hello2',
      isme: false,
    },
  ];
  // useEffect(() => {
  //   console.log(user_data);
  // }, [user_data]);

  const addfront = async () => {
    const data = [
      {
        isme: true,
        data: content,
      },
    ];
    setContent('');

    // console.log(data[0]);
    await user_data.push(data[0]);
    console.log(user_data);
  };
  const addback = async () => {
    const data = [
      {
        isme: false,
        data: content,
      },
    ];
    setContent('');
    // console.log(data);

    await user_data.push(data[0]);
    console.log(user_data);

    // user_data.append(data[0]);
  };
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
                    value={content}
                    placeholder="Enter your message"
                    onChange={(e) => setContent(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Button variant="info" onClick={() => addfront()}>
                  Send
                </Button>

                <Button variant="danger" onClick={() => addback()}>
                  Send
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div>
        {user_data.map((data) => {
          if (data.isme) {
            var col = 'red';
          } else {
            var col = 'blue';
          }
          return <Message text={data.data} color={col} />;
        })}
      </div>
    </Container>
  );
};

export default Home;
