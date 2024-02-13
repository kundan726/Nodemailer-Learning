const express = require('express');
const router = express.Router();
const {sendMail} = require('../controller/emailController.js');
const validateEmail = require('../utils/validationMiddlware.js')

const multer = require('multer');

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination folder
  },
  filename: function (req, file, cb) {
    const timeStamp = Date.now()
    const fileName = `${timeStamp}-${file.originalname}`
    cb(null, fileName); // Keep the original file name
  }
});

const upload = multer({ storage: storage });

// Multer middleware to handle file upload
router.post('/sendMail', upload.single('file'), validateEmail, sendMail);

module.exports = router