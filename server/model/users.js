const mongoose = require('mongoose')
var Schema = mongoose.Schema
var userSchema = new Schema ({
    userName:String,
    passWord:String
})

module.exports = mongoose.model('User',userSchema)