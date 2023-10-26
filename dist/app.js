"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var nunjucks = require("nunjucks");
var dateFilter = require('nunjucks-date-filter');
var session = require('express-session');
var app = express();
//Configure nunjucks
var appViews = path.join(__dirname, '/views/');
var nunjuckConfig = {
    autoescape: true,
    noCache: true,
    express: app
};
var env = nunjucks.configure(appViews, nunjuckConfig);
env.addFilter('date', dateFilter);
env.addFilter('is_undefined', function (obj) {
    return typeof obj === 'undefined';
});
//Configure Express
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "NOT HARDCODED SECRET", cookie: { maxAge: 60000 }, resave: true, saveUnitialised: true }));
app.listen(3000, function () {
    console.log('Server listening on port 3000');
});
//Express Routes
app.get('/', function (req, res) {
    res.render('pizza', {
        title: 'Pizza the Action LTD',
    });
});
require('./controller/productController')(app);
require('./controller/orderController')(app);
//# sourceMappingURL=app.js.map