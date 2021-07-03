const express=require('express');
const app=express()
const bodyParser=require('body-parser');

const form=require("./server/details")
const path=require('path');//alternative for string concatination while cjoining paths

app.use(express.static(path.join(__dirname,'dist/jgd')))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/form513",form);  //when url goes to localhost:2000/form513 (const form=require("./server/details")) i.e click on signup this details.js activates it gets the reqdetails from service

app.get("*",function(req,res){ //only by writing this we get html pg of signup nd login
    res.sendFile(path.join(__dirname,"dist/jgd/index.html"));
});


const port=2000;

app.listen(port,function(){
    console.log("listening to port num:"+port)
});

