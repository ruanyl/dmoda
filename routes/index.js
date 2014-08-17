var express = require('express');
var router = express.Router();
var fs = require("fs");
var pages = JSON.parse(fs.readFileSync("./data/pages.json", "utf8"));
var products = JSON.parse(fs.readFileSync("./data/products.json", "utf8"));

router.use(function(req, res, next){
	//console.log("Router using " + req.method, "for path " + req.url);
	res.send(304);
	next();
});

/* GET home page. */
router.get(pages[0].location, function(req, res) {
	res.render(pages[0].name, {
		pages: pages, 
		page: pages[0]
	});
});

/* GET products page. */
router.get(pages[1].location, function(req, res) {
	res.render(pages[1].name, {
		pages: pages, 
		page: pages[1],
		product_cateogries: products
	});
});

/* GET gallery page. */
router.get(pages[2].location, function(req, res) {
	res.render(pages[2].name, {
		pages: pages, 
		page: pages[2]
	});
});

/* GET contact page. */
router.get(pages[3].location, function(req, res) {
	res.render(pages[3].name, {
		pages: pages, 
		page: pages[3]
	});
});

module.exports = router;