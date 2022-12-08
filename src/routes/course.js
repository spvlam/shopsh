const express = require('express');
 const router = express.Router();
const courseController = require('../app/controller/courseController');
const upload = require('../middleware/upload')
// i tranfor this below code into middleware 
// const multer  = require('multer')
//const upload = multer({ dest: 'uploads/' }) this is default , but we can change it by the next one
//define the distination path and file name for uploaded file 
    // var storage = multer.diskStorage({
    //     destination: (req, file, cb) => {
    //         cb(null, 'uploads')
    //     },
    //     filename: (req, file, cb) => {
    //         cb(null, file.fieldname + '-' + Date.now())
    //     }
    // });
    
    // var upload = multer({ storage: storage });
// :slur mean that we pass (by tag a ) and it will receive its query param
// router.get('/create',courseController.create)
router.get('/course/forum',courseController.forum)
router.get('/course/create',courseController.create)
router.post('/course/store',upload.single('file_upload'),courseController.store);
router.get('/course/:slur',courseController.show)
router.get('/',courseController.index);



module.exports = router;