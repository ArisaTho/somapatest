import React, { useState } from 'react';
import './style.css';

function MyForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [score, setScore] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAdd = () => {
  
    const scoreNumber = parseFloat(score);

    const newData = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      score: scoreNumber 
    };

    fetch('/api/addData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data added:', data);
        setFirstName('');
        setLastName('');
        setGender('');
        setScore('');
        setErrorMessage('');
      })
      .catch(error => {
        console.error('Error adding data:', error);
        /*setErrorMessage('Error adding data. Please try again.');*/
      });
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
              {errorMessage && !firstName && <p className="error">first name is required.</p>}
            </th>
            <th>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errorMessage && !lastName && <p className="error">last name is required.</p>}
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
              {errorMessage && !gender && <p className="error">gender is required.</p>}
            </th>
            <th>
              <input
                type="text"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
              {errorMessage && !score && <p className="error">score is required.</p>}
              {errorMessage === 'Score must be a number.' && <p className="error">Score must be a number.</p>}
              {errorMessage === 'Minimum score is 0.' && <p className="error">Minimum score is 0.</p>}
              {errorMessage === 'Maximum score is 100.' && <p className="error">Maximum score is 100.</p>}
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
