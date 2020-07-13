let blogapp = require('../models/dogModel');
let express = require('express');
let router = express.Router();


router.get('/', (req, res) => {
  blogapp.find({}, (err, blogs) => {
  if (err) {
    console.log(err);
  } else {
    res.render("index", {blogs: blogs});
  }
});	
});

router.get('/new', (req, res) => {
	res.render('new');
});

router.get('/:id', (req, res) => {

	blogapp.findById(req.params.id, (err, foundblog) =>{
		if (err) {
			res.redirect('/');
		} else {
			res.render("show", {foundblog: foundblog});
		}
	})
    
});



router.get('/:id/edit', (req, res) => {
	blogapp.findById(req.params.id, (err, foundblog) =>{
		if (err) {
			res.redirect('/');
		} else {
			res.render("edit", {foundblog: foundblog});
		}
	})

});



router.post('/', (req, res) => {
	req.body.blog.body = req.sanitize(req.body.blog.body);	
	blogapp.create(req.body.blog, function (err, blogs) {
		if (err) {
			res.render("new");
		} else {
			res.redirect('/');
		}
	});
	
});



router.put('/:id', (req, res) => {	
	req.body.blog.body = req.sanitize(req.body.blog.body);
	blogapp.findByIdAndUpdate(req.params.id, req.body.blog, function (err, updatedblog) {
		if (err) {
			res.redirect('/');
		} else {
			res.redirect('/'+ req.params.id);
		}
	});    
});



router.delete('/:id', (req, res) => {
	blogapp.findByIdAndRemove(req.params.id, function (err, updatedblog) {
		if (err) {
			res.redirect('/');
		} else {
			res.redirect('/');
		}
	});    
});


module.exports = router;
