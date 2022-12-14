var Earring = require('../models/earring'); 
 

// for a specific Costume. 
exports.earring_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Earring.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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

// Handle Costume update form on PUT. 
exports.earring_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Earring.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.type)  
               toUpdate.type = req.body.type; 
        if(req.body.size) toUpdate.size = req.body.size; 
        if(req.body.set) toUpdate.set = req.body.set; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
// Handle earring delete on DELETE. 
exports.earring_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Earring.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 