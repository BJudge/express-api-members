const express = require('express');
const app = express();
const path = require('path');


//app.use(express.static('public'))

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
  //res.sendFile(path.join(__dirname, 'public', 'index.html'));
  res.sendFile(path.join(__dirname, 'public', 'index.html'));

});


app.get('/sample', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'ajax.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
