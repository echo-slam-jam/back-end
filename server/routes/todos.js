const express = require('express')
const mongodb = require('mongodb')

const router = express.Router();

router.get('/', async (req, res) => {
    //const todos = await loadTodosCollection();
    //res.send(await todos.find({}).toArray());
    res.send('hello');
});


module.exports = router;