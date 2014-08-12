var express = require('express');
var router = express.Router();
var fs = require("fs");
var pages = JSON.parse(fs.readFileSync("./data/pages.json", "utf8"));

/* GET home page. */
router.get('/', function(req, res) {
	console.log(pages[0])
	res.render("index", {pages: pages, primary_content: pages[0].primary_content});
});

/* GET products page. */
router.get('/productos', function(req, res) {

	res.render("products", {pages: pages});
});

/* GET gallery page. */
router.get('/galeria', function(req, res) {

	res.render("gallery", {pages: pages});
});

/* GET contact page. */
router.get('/contacto', function(req, res) {
	res.render("contact", {pages: pages});
});

module.exports = router;
