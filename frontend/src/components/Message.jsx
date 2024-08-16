import React from 'react';
import '../styles/Message.css';

const Message = ({ type, text }) => {
  return (
    <div className={`message ${type}`}>
      {text}
    </div>
  );
};

Message.defaultProps = {
  type: 'info',
  text: 'No message to display',
};

export const AlertTypes = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};

export default Message;