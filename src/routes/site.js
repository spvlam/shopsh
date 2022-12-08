const siteController = require('../app/controller/siteController');
const express = require('express');
const route = express.Router();

route.get('/',siteController.index);

module.exports = route;
