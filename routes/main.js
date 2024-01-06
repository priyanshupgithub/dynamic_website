const express = require("express");
const routes = express.Router();

const Details = require("../models/detail");
const slider = require("../models/slider");
const services = require("../models/services");
const Contact = require("../models/contact");

routes.get("/", async (req, res) => {
  // res.send("this is message from routes home page");
  const details = await Details.findById({ _id: "657315c308cc17da90de801b" });
  const slides = await slider.find();
  const service = await services.find(); 
    // console.log(details);
    // console.log(slides);
    //   console.log(service);

  res.render("index", {
    details: details, //iski help se hum is data ko index view par bhejh rhe ha
    slides: slides,
    service :service
  });
});

routes.get("/gallery", async (req, res) => {
  // res.send("this is message from routes gallery page ");
  const details = await Details.findById({ _id: "657315c308cc17da90de801b" });

  res.render("gallery", {
    details: details,
  });

});
routes.post("/process-contact-form",async(request,response)=>{
   console.log("form is submitted.");
   console.log(request.body);

    // save the data to the database 
    try{
        const data = await Contact.create(request.body)
        console.log(data);
        response.redirect("/");
    }
    catch(e){
        console.log(e);
        response.redirect("/");
    }
})

module.exports = routes;
