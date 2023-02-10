const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

//GET Static File
app.use(express.static(path.join(__dirname,'public')));

// Use BootStrap
app.use('/css', express.static(path.join(__dirname, 'node_modules','bootstrap','dist','css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules','bootstrap','dist','css')))

//HTTP Logger (Morgan)
app.use(morgan('combined'));

//Template engine (ExpressHandlebars)
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));

//Route
app.get('/', (req, res) => {
	res.render('home');
})

app.get('/news', (req, res) => {
	res.render('news');
})

// 127.0.0.1 - localhost
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
})