// var express = require('express');
// var router = express.Router();
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Earring', { title: 'Search Results' });
// });
// module.exports = router;


var express = require('express'); 
const earring_controlers= require('../controllers/earring'); 
const earring_controller_view=require('../controllers/earring_views');
var router = express.Router(); 
 
// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET costumes */ 
router.get('/', earring_controlers.earring_view_all_Page ); 
module.exports = router; 

///* GET detail earring page */ 
router.get('/detail', earring_controller_view.earring_view_one_Page); 

/* GET create earring page */
router.get('/create', earring_controller_view.earring_create_Page);

/* GET update costume page */ 
router.get('/update', secured, earring_controller_view.earring_update_Page); 

/* GET delete costume page */ 
router.get('/delete', earring_controller_view.earring_delete_Page); 