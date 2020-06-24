const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/start', (req, res) => {
    res.json({ message: 'Started' })
});

app.get('/stop', (req, res) => {
    res.json({ message: 'Stopped' })
});

app.get('/get_count', (req, res) => {
    var random = Math.floor(Math.random() * 10);
    res.json({ message: ""+random })
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});