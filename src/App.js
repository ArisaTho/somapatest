import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import userData from './data/sample-data.json';
import './style.css';
import MyForm from './form.js'; 
import UserInfoTable from './UserInfoTable.js'; 

function App() {
  const [isEditing, setIsEditing] = useState(false); 

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
