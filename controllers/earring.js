var Earring = require('../models/earring'); 
 
// List of all earrings 
exports.earring_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Earring list'); 
}; 
 
// for a specific earring. 
exports.earring_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Earring detail: ' + req.params.id); 
}; 
 
// Handle earring create on POST. 
exports.earring_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Earring create POST'); 
}; 
 
// Handle earring delete form on DELETE. 
exports.earring_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Earring delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.earring_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Earring update PUT' + req.params.id); 
}; 

// List of all Costumes 
exports.earring_list = async function(req, res) { 
    try{ 
        theEarrings = await Earring.find(); 
        res.send(theEarrings); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// VIEWS 
// Handle a show all view 
exports.earring_view_all_Page = async function(req, res) { 
    try{ 
        theEarrings = await Earring.find(); 
        res.render('earring', { title: 'Earring Search Results', results: theEarrings }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  

// Handle Costume create on POST. 
exports.earring_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Earring(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.type = req.body.type; 
    document.size = req.body.size; 
    document.set = req.body.set; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 