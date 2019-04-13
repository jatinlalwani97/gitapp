const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/search', (req, res) => {
  //res.send('You sent the name "' + req.body.name + '".');
  res.redirect('https://api.github.com/users/' + req.body.name);
});

app.listen(port,() => {
  console.log(`Server is up on port ${port}`);
});
