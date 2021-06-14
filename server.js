const express = require('express'); 
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => res.sendFile(path.join(__dirname, `/views/${name}`));
  next();
});
app.get('/', (req, res) => {
  res.show('index.html');
});
app.get('/about', (req, res) => {
  res.show('about.html');
});
app.use(express.static(path.join(__dirname, '/public')));
app.use('/user/settings', (req, res, next) => {
  res.show('login.html');
  next();
});
app.use('/user/panel', (req, res, next) => {
  res.show('login.html');
  next();
});
app.use((req, res) => {
  res.show('error.html');
});
app.listen(8000, () => console.log('Server is running on port: 8000'));