const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const dataFilePath = './data/sample-data.json';


app.post('/api/addData', (req, res) => {
  try {
    const newData = req.body; 
    const currentData = JSON.parse(fs.readFileSync(dataFilePath)); 

    currentData.push(newData);

    fs.writeFileSync(dataFilePath, JSON.stringify(currentData, null, 2));

    res.status(201).json({ message: 'Data added successfully' });
  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).json({ message: 'Error adding data. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
