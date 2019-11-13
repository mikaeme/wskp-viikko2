'use strict';

const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');
const multer  = require('multer');

const upload = multer({ dest: 'uploads/' });
router.get('/:id', catController.cat_get);

router.get('/', catController.cat_list_get);

router.post('/', upload.single('cat'), (req,res, next) => {
  console.log('cat post file', req.file);
  req.body.filename = req.file.filename;
  next();
});

router.post('/', catController.cat_create_post);

router.put('/', catController.cat_update_put);

router.delete('/', (req,res) => {
  res.send('With this endpoint you can delete cats.');

});

module.exports = router;
