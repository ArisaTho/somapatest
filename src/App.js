import React, { useState, useEffect } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import userData from './data/sample-data.json';
import './style.css';
import MyForm from './form.js'; 
import UserInfoTable from './UserInfoTable.js'; 

function App() {
  const [isEditing, setIsEditing] = useState(false); 
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? <MyForm /> : <UserInfoTable users={userData} handleEdit={handleEdit} />}
    </div>
  );
};

export default App;
