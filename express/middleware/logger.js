const moment = require('moment');


// homemade middleware
const logger = (req, res, next) => {
  console.log('Hello World!');
  next();
}

// i think this is cool
const logger2 = (req, res, next) => {
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
  next();
}

exports.logger = logger;
exports.logger2 = logger2;
