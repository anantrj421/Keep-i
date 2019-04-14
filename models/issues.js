var mongoose= require("mongoose");

var issueSchema=new mongoose.Schema({
   allissues:[
       {
           type: mongoose.Schema.Types.ObjectId,
           ref:"Issue"
       }
   ] 
})

module.exports= mongoose.model("issues",issueSchema);