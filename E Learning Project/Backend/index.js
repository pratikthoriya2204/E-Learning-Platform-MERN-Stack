const connectToMongo = require('./db');

connectToMongo();

const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000

app.use(express.json());
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//  Available Routes

app.use('/api/auth',require('./routes/authRoute/studentsAuth.js'));
app.use('/api/stdclass',require('./routes/studentClass.js'))


app.listen(port, () => {
  console.log(`ELearning Backend app listening on port ${port}`)
})