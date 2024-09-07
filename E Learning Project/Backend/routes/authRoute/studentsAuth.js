const express = require('express');
const StudentAuth = require('../../models/authModel/Students.js');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt'); // for hashing password
const jwt = require('jsonwebtoken');
const fetchStudent = require('../../middleware/fetchStudent.js');
const JWT_SCREAT = process.env.JWT_SCREAT;

router.post('/createstudent', [
    body('name', 'Name length is minimum 3...').isLength({ min: 3 }),
    body('email', 'Enter only Email...').isEmail(),
    body('password', 'Password length is minimum 5...').isLength({ min: 5 }),
], async (req, res) => {

    let Success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Success, errors: errors.array() });
    }

    try {
        const { name, email, password } = req.body;
        let student = await StudentAuth.findOne({ email });
        if (student) {
            return res.status(400).json({ Success, error: "Sorry student with this email already exist" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);

        student = await StudentAuth.create({
            name: name,
            email: email,
            password: secPass,
        })

        const data = {
            student: {
                id: student.id
            }
        }

        const studentAuthToken = jwt.sign(data, JWT_SCREAT);
        Success = true;
        res.json({ Success, studentAuthToken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Inetrnal server error..");
    }

})

router.post('/login', [
    body('email', 'Enter only Email...').isEmail(),
    body('password', 'Password can not be Blank').exists(),
], async (req, res) => {
    let Success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;
        let student = await StudentAuth.findOne({ email });
        if (!student) {
            Success = false;
            return res.status(400).json({ Success, error: "try to login with correct studentname..." });
        }

        const pasCompare = await bcrypt.compare(password, student.password);
        if (!pasCompare) {
            return res.status(400).json({ error: "try to login with correct password..." });
        }

        const data = {
            student: {
                id: student.id
            }
        }
        const studentAuthToken = jwt.sign(data, JWT_SCREAT);
        Success = true;
        let name = student.name;
        res.json({ Success, studentAuthToken,name, 'login': 'login successfull' })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Inetrnal server error..");
    }
});

router.post('/showstudent', fetchStudent, async (req, res) => {

    try {
        studentId = req.student.id;
        const student = await StudentAuth.findById(studentId).select("-password");
        res.send(student);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Inetrnal server error..");
    }
});

module.exports = router;