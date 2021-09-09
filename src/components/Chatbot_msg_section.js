import React from "react";
import Message from "./message";

function Chatbot_msg_section() {
  const user_data = [
    {
      data: "hello",
      isme: true,
    },
    {
      data: " hello424 hello424 hello424 hello424 hello424 hello424 hello424 hello424 hello424",
      isme: false,
    },
    {
      data: "hello24",
      isme: true,
    },
    {
      data: "hello2",
      isme: false,
    },
    {
      data: "hello24",
      isme: true,
    },
    {
      data: "hello2",
      isme: false,
    },
    {
      data: "hello24",
      isme: true,
    },
    {
      data: "hello2",
      isme: false,
    },
    {
      data: "hello24",
      isme: true,
    },
    {
      data: "hello2",
      isme: false,
    },
    {
      data: "hello24",
      isme: true,
    },
    {
      data: "hello2",
      isme: false,
    },
    {
      data: "hello24",
      isme: true,
    },
    // {
    //   data: 'hello2',
    //   isme: false,

    //   data: 'hello24',
    //   isme: true,
    // },
    // {
    //   data: 'hello2',
    //   isme: false,
    // },
    // {
    //   data: 'hello24',
    //   isme: true,
    // },
    // {
    //   data: 'hello2',
    //   isme: false,
    // },
    // {
    //   data: 'hello24',
    //   isme: true,
    // },
    // {
    //   data: 'hello2',
    //   isme: false,
    // },
    // {
    //   data: 'hello24',
    //   isme: true,
    // },
    // {
    //   data: 'hello2',
    //   isme: false,
    // },
    // {
    //   data: 'hello24',
    //   isme: true,
    // },
    // {
    //   data: 'hello2',
    //   isme: false,
    // },
    // {
    //   data: 'hello24',
    //   isme: true,
    // },
    // {
    //   data: 'hello2',
    //   isme: false,
    // },
  ];
  return (
    <div
      style={{
        padding: "10px",
        top: "50px",
        //   position: "relative",
        zIndex: "0",
      }}
    >
      <div style={{ height: "25px" }}></div>
      {user_data.map((data) => {
        if (data.isme) {
          var border = "0px 20px 20px 20px";
          var pos = "left";
          var col = "red";
        } else {
          var col = "blue";
          var pos = "right";
          var border = "20px 0px 20px 20px";
        }
        return (
          <Message text={data.data} color={col} border={border} pos={pos} />
        );
      })}
    </div>
  );
}

export default Chatbot_msg_section;
