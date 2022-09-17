const express = require('express');
const router = express.Router();

const tutors = require("../controllers/tutors.controller.js");
const parents = require("../controllers/parents.controller.js");
const students = require("../controllers/students.controller.js");


router.post('/tutor', tutors.create);
router.post('/parent', parents.create);
router.post('/student', students.create);

module.exports = router;