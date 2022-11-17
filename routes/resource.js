var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var earring_controller = require('../controllers/earring'); 
var earring_controller_view = require('../controllers/earring_views'); 
 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// earring ROUTES /// 
 
// POST request for creating a earring.  
router.post('/earrings', earring_controller.earring_create_post); 
 
// DELETE request to delete earring. 
router.delete('/earrings/:id', earring_controller.earring_delete); 
 
// PUT request to update earring. 
router.put('/earrings/:id', earring_controller.earring_update_put); 
 
// GET request for one earring. 
router.get('/earrings/:id', earring_controller.earring_detail); 
 
// GET request for list of all earring items. 
router.get('/earrings', earring_controller.earring_list); 

///* GET detail earring page */ 
router.get('/detail', earring_controller_view.earring_view_one_Page); 

/* GET create earring page */
router.get('/create', earring_controller_view.earring_create_Page);
 


/* GET create update page */ 
router.get('/update', earring_controller_view.earring_update_Page); 

/* GET delete costume page */ 
router.get('/delete', earring_controller_view.earring_delete_Page); 

module.exports = router; 