const express =require('express');
const router = express.Router()
const logInController = require('../app/controller/logInController')
const courseController = require('../app/controller/courseController');


router.get('/create',courseController.create)
router.post('/detail',logInController.detail)
router.get('/detail',logInController.detail2)
router.get('/',logInController.index)

module.exports = router;