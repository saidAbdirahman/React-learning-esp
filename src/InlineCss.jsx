// UserCard.js
import React from 'react';

const UserCard = () => {
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    width: '250px',
    fontFamily: 'Arial',
  };

  const nameStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#333',
  };

  return (
    <div style={cardStyle}>
      <div style={nameStyle}>Abubakar</div>
    </div>
  );
};

export default UserCard;
