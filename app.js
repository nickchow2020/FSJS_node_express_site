const express = require("express");
const pug = require("pug");
const app = express();

app.listen(3000,()=>{
    console.log("This is the port 3000 runs!!!");
})

app.set("view engine","pug");
app.use("/static",express.static('public'));

const index = require("./routes");
app.use(index);

const project = require("./routes/project");
app.use("/project",project);

const about = require("./routes/about");
app.use("/about",about);

app.use((req,res,next)=>{
    const error = new Error("Page Not Found! Please Double Check Your Code");
    error.status = 404;
    next(error);
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    if(res.statusCode === 500){
        err.status = 500;
        err.message = "There is an Error Occurs! Please Double Check Your Code";
    }else{
        console.log("HTTP Error Code 404,Page Not Found!");
    }
    
    res.locals.error = err;
    res.render("error");
})



