const express = require("express")
const hbs = require("hbs")
const app = express()
const mongoose = require("mongoose");
const routes = require('./routes/main');
const baseModule = require("hbs");
const Details = require("./models/Details")
const Slider = require("./models/Slider")
const Service = require("./models/Service")
const bodyParser = require("body-parser")


//Template engine config
app.set('view engine', 'hbs')
app.set("views","views")
hbs.registerPartials("views/partials")
//Routes config
app.use(bodyParser.urlencoded({
    extended:true
}))
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

// Service creation
// Service.create([
//     {
//         icon: 'fa-solid fa-champagne-glasses',
//         title: 'Beverages',
//         description: 'We provide all the Coke brands, Like: Thumps-Up, Coka-Cola, Limca, Charged etc.',
//         textOne: 'Details',
//         textTwo: 'Order',
//         linkOne: '#details',
//         linkTwo: '#order'
//     },
//     {
//         icon: 'fa-solid fa-cake-candles',
//         title: 'Cakes',
//         description: 'We have a wide range of Birthday Cakes and Celebration Cakes with hundreds of brilliant designs',
//         textOne: 'Details',
//         textTwo: 'Order',
//         linkOne: '#details',
//         linkTwo: '#order'
//     },
//     {
//         icon: 'fa-solid fa-burger-glass',
//         title: 'Cakes',
//         description: 'We have a wide range of Birthday Cakes and Celebration Cakes with hundreds of brilliant designs',
//         textOne: 'Details',
//         textTwo: 'Order',
//         linkOne: '#details',
//         linkTwo: '#order'
//     }
    
// ])

//Slider Creation

// Slider.create([
//     {
//         title: 'The cup of Coffee',
//         subTitle: 'May your coffee be strong and your Monday be short.',
//         imageUrl: "/static/images/s1.jpg"
//     },    
//     {
//         title: 'Birthday Cakes',
//         subTitle: 'The cheapest and safest way to be happy is to eat a piece of cake after a long fast.',
//         imageUrl: "/static/images/s2.jpg"
//     },    
//     {
//         title: 'Soft Drinks',
//         subTitle: '“If someone asks for a soft drink at a party, we no longer think he is a wimp.',
//         imageUrl: "/static/images/s3.jpg"
//     } 
// ])
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
//             url: "/#service_section"
//         },
//         {
//             lable: "Gallary",
//             url: "/gallary"
//         },
//         {
//             lable: "About",
//             url: "/#about_section"
//         },
//         {
//             lable: "Contact Us",
//             url: "/#contact_us_section"
//         }
//     ]
// })



//PORT config
app.listen(process.env.PORT | 5000 ,()=>{
    console.log("server started.... ")
})

