const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
// const sass = require('node-sass');
const app = express();
const port = 3000;


const homeRouter = require('./src/routes/home_router');
const shopRouter = require('./src/routes/shop_router');
const cart = require('./src/routes/cart');


app.use(morgan('combined'))
// using express static
app.use(express.static(path.join(__dirname, 'src/public/css')));
app.use(express.static(path.join(__dirname, 'src/public/img')));


// template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/resources/views'))

app.get('/about-us', (req, res) => {
  res.render('about-us')
})

app.use('/home', homeRouter);
app.use('/shop', shopRouter);
app.use('/cart', cart)
// listen
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/home`)
})




