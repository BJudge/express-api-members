const express = require('express');
const router = express.Router();
const members = require('../../members');


// get all memebrs
router.get('/', function(req, res) {
  res.json(members);
});

//get a single member commonJS

router.get('/:id', function(req, res) {
  const found = members.some(function(member) {
    return member.id === parseInt(req.params.id)});
    if (found) {
      res.json(members.filter(function(member) {
        return member.id === parseInt(req.params.id)}));
    } else {
      res.status(400).json({msg: `No member with the id ${req.params.id}`})
    };
});



/*app.get('/api/members/:id', (req, res) => {
  res.json(members.filter(member =>
    member.id === parseInt(req.params.id)
  ));
}); */

module.exports = router;
