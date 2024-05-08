import React, { useState } from 'react';
import './style.css';

function MyForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [score, setScore] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAdd = () => {
    // โค้ดที่มีอยู่ใน handleAdd ไม่เปลี่ยนแปลง
  };

  const handleCancel = () => {
    clearFormFields();
    setErrorMessage('');
  };

  const clearFormFields = () => {
    setFirstName('');
    setLastName('');
    setGender('');
    setScore('');
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </th>
            <th>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </th>
          </tr>
          <tr>
            <th>Gender</th>
            <th>Score</th>
          </tr>
          <tr>
            <th>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value=""> </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unknown">Unknown</option>
              </select>
            </th>
            <th>
              <input
                type="text"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
            </th>
          </tr>
          <tr>
            <th><button onClick={handleAdd} className="primary">Add</button></th>
            <th><button onClick={handleCancel}>Cancel</button></th>
          </tr>
        </tbody>
      </table>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default MyForm;
