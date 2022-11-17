var Earring = require('../models/earring'); 

// Handle a show one view with id specified by query 
exports.earring_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Earring.findById( req.query.id) 
        res.render('earringdetail',  
{ title: 'Earring Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.earring_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('earringcreate', { title: 'Earring Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   }

// Handle building the view for updating a costume. 
// query provides the id 
exports.earring_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Earring.findById(req.query.id) 
        res.render('earringupdate', { title: 'Earring Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.earring_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Earring.findById(req.query.id) 
        res.render('earringdelete', { title: 'Earring Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 



    