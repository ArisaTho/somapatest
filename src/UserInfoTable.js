import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import MyForm from './form.js';

const UserInfoTable = ({ users, handleEdit }) => {
  const [editingId, setEditingId] = useState(null);
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const [gender, setGender] = useState(''); 
  const [score, setScore] = useState('');

  const handleCancel = () => {
    setEditingId(null);
    clearFormFields(); 
  };

  const clearFormFields = () => {
    setFirstName('');
    setLastName('');
    setGender('');
    setScore('');
  };

  return (
    <div>
      <MyForm />
      <table className="user-info-table">
        <thead>
          <tr>
            <th>ID</th>
            <th> </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{user.id}</td>
              <td>
                <button onClick={() => { handleEdit(user.id); setEditingId(user.id); }}>
                  <FaPencilAlt />
                </button>
              </td>
              <td>{editingId === user.id ? <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /> : user.firstname}</td>
              <td>{editingId === user.id ? <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /> : user.lastname}</td>
              <td title={user.gender === 'Male' ? 'Male' : user.gender === 'Female' ? 'Female' : 'Unknown'}>
                  {editingId === user.id ? <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} /> : user.gender}
              </td>
              <td>{editingId === user.id ? <input type="text" value={score} onChange={(e) => setScore(e.target.value)} /> : user.score.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserInfoTable;
