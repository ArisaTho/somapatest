import React, { useState } from 'react';
import './style.css';

function MyForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [score, setScore] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleAdd = () => {
    if (isNaN(score)) {
      setErrorMessage('Score must be a number.');
      return;
    }
    const scoreNumber = parseFloat(score);
    if (scoreNumber < 0) {
      setErrorMessage('Minimum score is 0.');
      return;
    }
    if (scoreNumber > 100) {
      setErrorMessage('Maximum score is 100.');
      return;
    }

    console.log('Added:', { firstName, lastName, gender, score });
    setFirstName('');
    setLastName('');
    setGender('');
    setScore('');

    setErrorMessage('');
  };

  return (
    <div>
      <table>
      <tr>
        <th>First name</th>
        <th>Last name</th>
      </tr>
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
        <th>gender</th>
        <th>score</th>
      </tr>
      <tr>
        <th>
        <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value=" "> </option>
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
        <th><button>Cancel</button></th>
      </tr>
      </table>
      {}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default MyForm;
