let express = require('express');
let router = express.Router();

router.get('/new', (req, res) => {
	res.render('new');
});


module.exports = router;
