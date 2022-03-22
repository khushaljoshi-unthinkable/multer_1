const express=require("express");
const path=require("path");
const app=express();
var multer = require('multer');

app.use(express.static("./public"));
app.use(express.urlencoded({extended:true}));


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
   cb(null,path.join( __dirname,'/public/'))
   },
   filename: function (req, file, cb) {
     cb(null, file.originalname)
   }
 })

  var upload = multer({storage: storage});


app.post('/', upload.single("f"), function(req,res){
    res.end("got file");
  });


app.all("*",(req,res)=>{
    res.status(404).send("resource");
})

app.listen(5001,()=>{
    console.log("port 5000");
});
