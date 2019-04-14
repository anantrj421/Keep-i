var mongoose=require('mongoose');
var newIssueSchema=new mongoose.Schema({
    text:String
})

module.exports= mongoose.model("newIssue",newIssueSchema);