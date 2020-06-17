const express = require('express');
const path = require('path');
const loggerMiddleware = require('./middleware/logger');
const exphbs = require('express-handlebars');
const app = express();
const members = require('./members');



//init middleware
//app.use(loggerMiddleware.logger2);

//init middleware body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/', function(req, res) {
  res.render('index.handlebars', {title: 'Member App', members});
  //res.sendFile(path.join(__dirname,'public', 'index.html'));

});

//parent route Memebr api route
app.use('/api/members', require('./routes/api/members.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
