import express = require('express');
import path = require('path');
import nunjucks = require('nunjucks');
import { Product } from "./model/product";
var dateFilter = require('nunjucks-date-filter');
 
const app = express();

//Configure nunjucks
const appViews = path.join(__dirname, '/views/');
const nunjuckConfig = {
    autoescape: true,
    noCache: true,
    express: app
};

const env = nunjucks.configure(appViews, nunjuckConfig);
env.addFilter('date', dateFilter);
env.addFilter('is_undefined', function(obj: any) {
    return typeof obj === 'undefined';
  });

//Configure Express
app.set('view engine', 'html');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(3000, () =>{
    console.log('Server listening on port 3000');
});

//Express Routes

app.get('/', (req, res) => {
    res.render('pizza', {
        title: 'Pizza the Action LTD',
    });
})



require('./controller/productController')(app);
require('./controller/orderController')(app);