const express = require('express');
const path = require('path');
const loggerMiddleware = require('./middleware/logger');

const app = express();



//init middleware
//app.use(loggerMiddleware.logger2);

//init middleware body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'public', 'index.html'));

});

//parent route Memebr api route
app.use('/api/members', require('./routes/api/members.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
