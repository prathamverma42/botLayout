import React from "react";

function Chatbot_header() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        height: "50px",
        //   marginLeft: "5%",
        //   marginRight
        //   margin: "auto",
        marginLeft: "-1px",
        //   borderRadius: "5%",
        width: "inherit",
        //   display: "block",
        position: "fixed",
        boxSizing: "border-box",
        //   alignContent: "center",
        alignItems: "center",
        alignContent: "center",
        lineHeight: "50px",
      }}
    >
      <p style={{ paddingLeft: "10px", zIndex: "2" }}>CHATBOT</p>
    </div>
  );
}

export default Chatbot_header;
