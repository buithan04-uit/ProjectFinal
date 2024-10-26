const express = require('express');
const router = express.Router();
const { getHomepage, getSample } = require('../controllers/homeController');


// khai bao route

router.get('/', getHomepage)

router.get('/sample', getSample)

module.exports = router;