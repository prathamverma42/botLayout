import React, { useState } from 'react';

function Message(props) {
  var col = props.color;
  return <div style={{ backgroundColor: col }}>{props.text}</div>;
}

export default Message;
