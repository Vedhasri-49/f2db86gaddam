const mongoose = require("mongoose")
const earringSchema = mongoose.Schema({
    type: {
        type:String,
        required:true
    },
    size: {
        type:String,
        required:true
    },
    set: {
        type:Number,
        min:0,
        max:50
    }
})

module.exports = mongoose.model("Earring", earringSchema) 