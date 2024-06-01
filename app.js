const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'registration-form.html'));
});

app.post('/submit-registration', (req, res) => {
  const { name, email, password, graduation } = req.body;
  console.log('Registration Details:', req.body);
  res.send(`Thank you for registering, ${name}!`);
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
