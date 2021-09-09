import React, { useState } from 'react';

function Message(props) {
  var col = props.color;
  var position = props.pos;
  var borderend = props.border;
  return (
    <div
      className="mt-4"
      style={{
        backgroundColor: col,
        marginTop: '40xpx',
        padding: '10px',
        // width: '80%',
        width: 'auto',
        float: position,
        lineHeight: '35px',
        fontSize: '25px',
        display: 'flex',
        maxWidth: '90%',
        clear: 'both',
        // display: 'flex',
        // align
        // justifyContent: 'center',
        // flex: 'right',
        borderRadius: borderend,
        // borderRadius: '8%',
        // textAlign: 'center',
      }}
    >
      {props.text}
    </div>
  );
}

export default Message;
