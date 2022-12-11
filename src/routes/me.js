const express = require('express')
const router = express.Router()
const meController = require('../app/controller/meController')
const upload = require('../middleware/upload')
//submit form for garbage
router.post('/garbage/submit',meController.submitTest)
// submit form
router.post('/submit',meController.submitTest)
//garbage
router.get("/garbage",meController.garbage)
//recover
router.put('/:id/recovery',meController.recovery)
//soft delete
router.delete('/:id/delete',meController.SoftDelete)
//hardDeelete
router.delete('/:id/permutualdelete',meController.deleteHard)
// router.delete('/:id',meController.deleteHard)
router.get('/:id/fillCourse',meController.edit)
router.put('/:id/fillCourse',upload.single('file_upload'),meController.update)
// router.get('/:id/delete',meController.delete)
router.get('/course',meController.index)
//  params is now assigned to abc
// it means that req.parames will return an object 
// with key is abc ( after : signs) and the value is on the url
router.get('/:abc/abcdef',meController.test)
module.exports = router
