const express=require("express")
const router=express.Router()

var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/";
var dbo=""

MongoClient.connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true},function(err,db){
    if(err) throw err;
    dbo=db.db("courses") //database with name courses will be created automatically

        var date = (new Date()).toISOString().split('T')[0];
        var myquery = {startdate:{$lte:date}};
        dbo.collection("details").deleteMany(myquery, function(err, obj) {
            if (err) throw err;
            console.log(obj.result.n + " document(s) deleted");
           
        });
});

router.post("/",function(req,res){
    cname=req.body.course
    ctext=req.body.text
    cstartdate=req.body.startdate
    cenddate=req.body.enddate
    ctime=req.body.time
    cteacher=req.body.teacher
    cpassword=req.body.password
    clink=req.body.link
    var query={coursename:cname,Imagetext:ctext,startdate:cstartdate,enddate:cenddate,time:ctime,teacher:cteacher,password:cpassword,link:clink}
    dbo.collection("details").insertOne(query,function(err,res){
        if(err) throw(err)
        console.log("successfully inserted")   
    });
    res.send(JSON.stringify("Okey"))
    
});

router.get("/teja",function(req,res){
    console.log('get req for all courses');
    dbo.collection("details").find({}).toArray(function(err,result){
        res.send(result)
    })
})

module.exports=router

