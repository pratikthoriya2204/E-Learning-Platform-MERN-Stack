const jwt = require('jsonwebtoken');
const JWT_SCREAT = process.env.JWT_SCREAT;

const fetchStudent = (req, res, next) => {
    const token = req.header('studentAuth-Token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using valid token" })
    }
    try {
        const data = jwt.verify(token,JWT_SCREAT);
        req.student = data.student;
        next();     
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using valid token" })
    }

}

module.exports = fetchStudent;