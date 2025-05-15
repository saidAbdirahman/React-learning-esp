
// AlertBox.js
import React from 'react';
import styled from 'styled-components';

const Alert = styled.div`
  background-color: #ffe0e0;
  border: 1px solid #ff5c5c;
  padding: 16px;
  border-radius: 5px;
  color: #a70000;
  font-family: sans-serif;
  margin: 10px 0;
`;

const AlertBox = () => {
  return <Alert>Error: Something went wrong!</Alert>;
};

export default AlertBox;
