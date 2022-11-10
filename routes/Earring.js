// var express = require('express');
// var router = express.Router();
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Earring', { title: 'Search Results' });
// });
// module.exports = router;


var express = require('express'); 
const earring_controlers= require('../controllers/earring'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', earring_controlers.earring_view_all_Page ); 
module.exports = router; 