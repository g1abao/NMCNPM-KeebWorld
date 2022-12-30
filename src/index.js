const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
// const sass = require('node-sass');
const app = express();
const port = 3000;

app.use(morgan('combined'))

app.use(express.static(path.join(__dirname + 'public')));
app.use('/img',express.static(path.join(__dirname, 'public/img')));
app.use('/js',express.static(path.join(__dirname, 'public/js')));
app.use('/css',express.static(path.join(__dirname, 'public/css')));
// template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

// route
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.get('/login', (req, res) => {
  res.render('login');
})


// listen
app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
})
