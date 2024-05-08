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

    // Input validation
    if (!firstName || !lastName || !gender || !score) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (isNaN(scoreNumber) || scoreNumber < 0 || scoreNumber > 100) {
      setErrorMessage('Score must be a number between 0 and 100.');
      return;
    }

    // Get the last item's id from the JSON data
    const lastItemId = userData.length > 0 ? userData[userData.length - 1].id : 0;

    const newData = {
      id: lastItemId + 1, // Increment the id
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
        setErrorMessage('Error adding data. Please try again.');
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
              {errorMessage && !firstName && <p className="error">First name is required.</p>}
            </th>
            <th>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errorMessage && !lastName && <p className="error">Last name is required.</p>}
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
              {errorMessage && !gender && <p className="error">Gender is required.</p>}
            </th>
            <th>
              <input
                type="text"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
              {errorMessage && !score && <p className="error">Score is required.</p>}
              {errorMessage === 'Score must be a number.' && <p className="error">Score must be a number.</p>}
              {errorMessage === 'Score must be between 0 and 100.' && <p className="error">Score must be between 0 and 100.</p>}
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
