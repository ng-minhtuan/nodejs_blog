const express = require('express');
const morgan = require('morgan');

const app = express()
const port = 3000

//Logger Morgan
app.use(morgan('combined'));

//Route
app.get('/', (req, res) => {
	res.send('Hello World!')
})

// 127.0.0.1 - localhost
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})