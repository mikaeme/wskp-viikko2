'use strict';

const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');
const multer  = require('multer');
const { body, sanitizeBody } = require('express-validator');

const upload = multer({ dest: 'uploads/' });
router.get('/:id', catController.cat_get);

router.get('/', catController.cat_list_get);

router.post('/', upload.single('cat'), (req,res, next) => {
  console.log('cat post file', req.file);
  if (req.file === undefined) {
    res.json({
      error:'No file',
    });
  } else if(!req.file.mimetype.includes('image')){
    res.json({
      error:'Not an image',
    });
  } else {

    next();
  }
});

router.post('/',
    [
        body('name','EI!').isLength({min:1}).trim().escape(),
        body('age', 'VIELÄKÄÄN!').isNumeric().isLength({min:1}),
        body('weight', 'YHTÄÄN!').isNumeric().isLength({min:1}),
        body('owner','MITÄÄN').isNumeric().isLength({min:1}),
        sanitizeBody('name').escape()
    ],
catController.cat_create_post);

router.put('/',
    [
      body('name','EI!').isLength({min:1}).trim().escape(),
      body('age', 'VIELÄKÄÄN!').isNumeric().isLength({min:1}),
      body('weight', 'YHTÄÄN!').isNumeric().isLength({min:1}),
      body('owner','MITÄÄN').isNumeric().isLength({min:1}),
      sanitizeBody('name').escape()
    ],
    catController.cat_update_put);

router.delete('/:id', catController.cat_delete);

module.exports = router;
