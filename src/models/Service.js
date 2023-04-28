const mongoose = require("mongoose")

const Service = mongoose.Schema({
    icon: String,
    title: String,
    description: String,
    textOne: String,
    textTwo: String,
    linkOne: String,
    linkTwo: String
})

module.exports = mongoose.model("services",Service)