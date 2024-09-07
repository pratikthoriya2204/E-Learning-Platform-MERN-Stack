const express = require("express");
const router = express.Router();
const fetchStudent = require("../middleware/fetchStudent");
const { body, validationResult } = require('express-validator');
const ClassModel = require("../models/ClassModel.js");


router.get('/fetchallclasses',fetchStudent,async(req,res)=>{

    try {
        const studentClass = await ClassModel.find({student: req.student.id});
        res.json(studentClass); 
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Inetrnal server error..");
    }
})

router.post('/addclass',fetchStudent,[
    body('name','This feild should not be empty!!').notEmpty(),
    body('description','This feild should not be empty!!').notEmpty(),
    body('subject','This feild should not be empty!!').notEmpty()
],async(req,res)=>{

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {name,description,subject} = req.body;

        const studentClass = new ClassModel({
            name,description,subject, student: req.student.id
        });

        const savedClass = await studentClass.save();
        res.json(savedClass);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Inetrnal server error..");
    }
})


module.exports = router;