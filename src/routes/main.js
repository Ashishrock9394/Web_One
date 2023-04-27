const express = require('express')
const { route } = express.Router('express/lib/application')

const Details = require("../models/Details")

const routes = express.Router()

routes.get("/", async (req,res) => {
    const details = await Details.findOne({"_id":"644accf2882e1d1041cf745e"})
    // console.log(details)
    res.render("index", {
        details:details
    })
})

routes.get("/gallary",async (req,res)=>{
    const details = await Details.findOne({"_id":"644accf2882e1d1041cf745e"})
    // console.log(details)
    res.render("gallary", {
        details:details
    })
})

module.exports = routes