const express = require('express')
const { route } = express.Router('express/lib/application')

const Details = require("../models/Details")
const Slider = require("../models/Slider")
const Service = require("../models/Service")
const Contact = require("../models/Contact")


const routes = express.Router()

routes.get("/", async (req,res) => {
    const details = await Details.findOne({"_id":"644accf2882e1d1041cf745e"})
    const sliders = await Slider.find()
    const services = await Service.find()
    // console.log(sliders)
    res.render("index", {
        details:details,
        sliders:sliders,
        services:services

    })
})

routes.get("/gallary",async (req,res)=>{
    const details = await Details.findOne({"_id":"644accf2882e1d1041cf745e"})
    // console.log(details)
    res.render("gallary", {
        details:details
    })
})

//process contact form

routes.post("/process-contact-form", async (req,res) =>{
    // save data into DB
    try{

        const data = await Contact.create(req.body)
        res.redirect("/")
    }catch(e){
        console.log(e)
        res.redirect("/error")
    }
})

module.exports = routes