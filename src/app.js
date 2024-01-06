const express = require("express");

const app = express();
const hbs = require("hbs");
const routes = require("../routes/main");
const mongoose = require("mongoose");
const Details = require("../models/detail");
const Slider = require("../models/slider");
const Service = require("../models/services")
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

// /static use krne ka matlab hum ab public ke andar a gye mtlb hum publicly things to use kar sakte ha
app.use(bodyParser.urlencoded({
  extented:true
}))
app.use("/static", express.static("public"));
app.use("", routes);
// templae engine set
app.set("view engine", "hbs");
app.set("views", "views");

// register partials
hbs.registerPartials("views/partials");

// db connnection
mongoose
  .connect("mongodb://127.0.0.1:27017/my_website")
  .then(() => {
    console.log("database is connected");
    // Details.create({
    //     brandName:"My technical solutions",
    //     brandIconUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4Rfprwyine2a8SK437EZBwixVhCJGpJ6mA&usqp=CAU",
    //     links : [{
    //         label:"Home",
    //         url:"/",
    //     },
    //     {
    //         label:"Services",
    //         url:"/services",
    //     },
    //     {
    //         label:"Gallery",
    //         url:"/gallery",
    //     },
    //     {
    //         label:"About",
    //         url:"/about",
    //     },
    //     {
    //         label:"contact Us",
    //         url:"/contact",
    //     }
    // ],
    // });

    //creation of the slider
    // Slider.create([
    //     {
    //         title:"learn java",
    //         subTitle: "l this is tefdn fsa nasdkfna nadgf ansdgf  aosdfgoap jaosg joa  jaosfd",
    //         imageUrl : "/static/images/img2.jpg",
    //     },
    //     {
    //         title:"learn react",
    //         subTitle: "l this is tefdn fsa nasdkfna nadgf ansdgf  aosdfgoap jaosg joa  jaosfd",
    //         imageUrl : "/static/images/img1.jpg",

    //     },

    //     {
    //         title:"learn Node js",
    //         subTitle: "l this is tefdn fsa nasdkfna nadgf ansdgf  aosdfgoap jaosg joa  jaosfd",
    //         imageUrl : "/static/images/img3.jpg",

    //     }
    // ])

    // creation of the services secion
  //   Service.create([
  //     {
  //     icon:'fa-solid fa-shield-halved',
  //     title:'Provide best courses',
  //     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nihil error eos voluptatum rem vero temporibus libero repellat nisi ad?',
  //     linkText:'Check',
  //     linkUrl:'https://www.geeksforgeeks.org', 
  //     },
  //     {
  //     icon:'fa-solid fa-shield-halved',
  //     title:'Learn Everything ',
  //     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nihil error eos voluptatum rem verotemporibus libero repellat nisi ad?',
  //     linkText:'Check',
  //     linkUrl:'https://www.geeksforgeeks.org', 
  //     },
  //     {
  //     icon:'fa-solid fa-shield-halved',
  //     title:'Learn projects',
  //     description:'Lorem ipsumtetur adipisicing elit. Optio nihil error eos voluptatum rem vero temporibus liberrepellat nisi ad?',
  //     linkText:'Check',
  //     linkUrl:'https://www.geeksforgeeks.org', 
  //     },
  // ])

  })
  .catch((e) => {
    console.log(e, "some error in the connection");
  });

app.listen(port, () => {
  console.log(`server is started on port ${port}`);
});
