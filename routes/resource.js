var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var earring_controller = require('../controllers/earring'); 
 
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
 
module.exports = router; 