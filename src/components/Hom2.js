import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Chatbot_header from "./Chatbot_header";
import Chatbot_msg_section from "./Chatbot_msg_section";

function Hom2() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.2 }}
          style={{
            width: "25%",
            bottom: "50px",
            right: "50px",
            position: "fixed",
            margin: "10px",
            // borderRadius: "5%",
            border: "2px black solid",
            height: "75vh",
            overflowY: "scroll",
            backgroundColor: "#EAEEF3",
            // padding: "10px",
          }}
        >
          <Chatbot_header />
          <Chatbot_msg_section />
          <div>
            <input type="text" placeholder="Enter your message..." />
          </div>
        </motion.div>
      ) : (
        <motion.div
          style={{ bottom: "50px", right: "50px", position: "fixed" }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.2 }}
        >
          {/* <p>Hello</p> */}
          {/* <img /> */}
          <Button
            style={{ borderRadius: "50%" }}
            onClick={(e) => setShow(true)}
          >
            BOT
          </Button>
        </motion.div>
      )}
    </>
  );
}

export default Hom2;
