const express = require('express');
const router = express.Router();
const members = require('../../members');
const uuid = require('uuid');


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

//create a member
router.post('/', function(req, res) {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }
  if(!newMember.name || !newMember.email) {
    res.status(400).json({msg: 'Please include a name and email'});
  }

    members.push(newMember);
    res.json(members);
});

//update member
router.put('/:id', function(req, res) {
  const found = members.some(function(member) {
    return member.id === parseInt(req.params.id)});

    if (found) {
      const updMember = req.body;
        members.forEach(function(member) {
          if(member.id === parseInt(req.params.id)) {
            member.name = updMember.name ? updMember.name: member.name;
            member.email = updMember.email ? updMember.email: member.email;

            res.json({msg: "Member Updated", member });
          }
        });
      /*res.json(members.filter(function(member) {
        return member.id === parseInt(req.params.id)})); */
    } else {
      res.status(400).json({msg: `No member with the id ${req.params.id}`})
    };
});

//delete /member
router.delete('/:id', function(req, res) {
  const found = members.some(function(member) {
    return member.id === parseInt(req.params.id)});

if (found) {
  res.json({
    msg: 'Member Deleted', members: members.filter(function(member) {
       return member.id !== parseInt(req.params.id)
    })
  });
} else {
  res.status(400).json({message: `No member with the id of ${req.params.id}`});
}

});



/*app.get('/api/members/:id', (req, res) => {
  res.json(members.filter(member =>
    member.id === parseInt(req.params.id)
  ));
}); */

module.exports = router;
