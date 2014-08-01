var express = require('express');
var router = express.Router();
var fs = require("fs");
var pages = JSON.parse(fs.readFileSync("./data/pages.json", "utf8"));

/* GET home page. */
router.get('/', function(req, res) {
/*	pages.forEach(function(el, index) {
    	console.log(el.name);
	});*/
	res.render("index", {pages: pages});
});

/* GET products page. */
router.get('/productos', function(req, res) {
/*	pages.forEach(function(el, index) {
    	console.log(el.name);
	});*/
	res.render("products", {pages: pages});
});

/* GET gallery page. */
router.get('/galeria', function(req, res) {
/*	pages.forEach(function(el, index) {
    	console.log(el.name);
	});*/
	res.render("gallery", {pages: pages});
});

/* GET contact page. */
router.get('/contacto', function(req, res) {
/*	pages.forEach(function(el, index) {
    	console.log(el.name);
	});*/
	res.render("contact", {pages: pages});
});

module.exports = router;
