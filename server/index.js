const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const todos = require('./routes/todos');
app.use('/todos', todos);

//section for production stage v

//section for production stage ^

// listen to server port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening to port ${port}`));
