const mongoose = require("mongoose")
const Details = mongoose.Schema({
    brandName: String,
    brandIconUrl: String,
    links: [
        {
            lable: String,
            url: String,
        },
    ],
})

module.exports=mongoose.model("details",Details)