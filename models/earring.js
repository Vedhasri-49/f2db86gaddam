const mongoose = require("mongoose")
const earringSchema = mongoose.Schema({
    type: String,
    size: String,
    set: Number
})

module.exports = mongoose.model("Earring", earringSchema) 