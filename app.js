var express=require('express'),
    bodyParser = require('body-parser'),
    mongoose    =require('mongoose'),
    app=express();

// var newIssue= require("./models/newissue")
// var Issue= require("./models/issues")

// mongoose.connect("mongodb://localhost/keep_i");

app.set("view engine","ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

//getting the routes done 
app.get("/",function(req,res){
    res.render("index")
})


app.get("/login",function(req,res){
    res.render("login")
})

app.get("/login/choose",function(req,res){
    res.render("choose");
})

app.get("/login/choose/postelec",function(req,res){
    // res.render("postelec",{issue:Issue});
    res.render("postelec")
})


app.get("/login/choose/postelec/new",function(req,res){
    res.render("newIssue")
})

// app.post("/login/choose/postelec",function(req,res){
// Issue.findById(req.params.id,function(err,issue){
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//     newIssue.create(req.body.issue,function(err,newissue){
//     if(err){
//         console.log(err)
//     }
//     else{
//         newissue.save();
//         Issue.allissues.push(newissue)
//         Issue.save()
//         res.redirect("/login/choose/postelec")
//     }
// })
// }})
// })

PORT=8000;
app.listen(PORT,function(){
    console.log("Ready to go");
})

// app.listen(process.env.PORT,process.env.IP,function(){
//     console.log("Ready")
// })