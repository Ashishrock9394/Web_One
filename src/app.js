const express = require("express")
const hbs = require("hbs")
const app = express()
const mongoose = require("mongoose");
const routes = require('./routes/main');
const baseModule = require("hbs");
const Details = require("./models/Details")


//Template engine config
app.set('view engine', 'hbs')
app.set("views","views")
hbs.registerPartials("views/partials")
//Routes config
app.use('',routes)

//static config
app.use('/static', express.static("public"))

//DB connection
mongoose.connect("mongodb://127.0.0.1:27017/web_one",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},)
.then(()=>{console.log("db connected...")})

.catch((err)=> { console.log(err); })
// data collection for navbar

// Details.create({
//     brandName: "Sparks Enterprises",
//     brandIconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdao4_dtxyAgGstwvh2Md-sBp1gMQipURFdlSK8KCKaw&usqp=CAU&ec=48665701",
//     links: [
//         {
//             lable: "Home",
//             url: "/"
//         },
//         {
//             lable: "Services",
//             url: "/services"
//         },
//         {
//             lable: "Gallary",
//             url: "/gallary"
//         },
//         {
//             lable: "About",
//             url: "/about"
//         },
//         {
//             lable: "Contact Us",
//             url: "/contact_us"
//         }
//     ]
// })



//PORT config
app.listen(process.env.PORT | 5000 ,()=>{
    console.log("server started.... ")
})

