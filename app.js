const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');

const app = express();

//Configure nunjucks
const appViews = path.join(__dirname, '/views/');
const nunjuckConfig = {
    autoescape: true,
    noCache: true,
    express: app
};

nunjucks.configure(appViews, nunjuckConfig);

//Configure Express
app.set('view engine', 'html');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(3000, () =>{
    console.log('Server lsitening on port 3000');
});

//Express Routes

app.get('/', (req, res) => {
    res.render('pizza', {
        title: 'Pizza the Action LTD',
    });
})
require('./controller/productController')(app);