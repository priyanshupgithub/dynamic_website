const mogoose = require("mongoose");
const Details = mogoose.Schema({
    brandName : String,
    brandIconUrl : String,
    links : [{
        label:String,
        url:String
    },
],
});
module.exports = mogoose.model("detail",Details);