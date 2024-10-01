const mongoose = require('mongoose')

const UserData = new mongoose.Schema({
    name: { type: String},
    email: { type: String},
    age: { type: Number, min: 18},
    bio: { type: String },
    FY: { type: Number },
    SY: { type: Number },
    TY: { type: Number },
    date: { type: Date, default: Date.now },
    imageUrl: { type: String },
},{timestamps:true})

module.exports = mongoose.model("Data",UserData)