'use strict';

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { body, sanitizeBody } = require('express-validator');

router.get('/:id', userController.user_get);

router.post('/',
    [
      body('name', 'SAATANA!').isLength({min: 3}).trim().escape(),
      body('email', 'PERKELE!').isEmail(),
      body('passwd', 'HELVETTI!').matches('(?=.*[A-Z]).{8,}'),
      sanitizeBody('name').escape()
    ],
    userController.user_create_post);

router.put('/', (req,res) => {
  res.send('With this endpoint you can edit users.');
});

router.delete('/', (req,res) => {
  res.send('With this endpoint you can delete users.');

});

module.exports = router;