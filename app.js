const express = require("express"); //include express
const pug = require("pug"); //include pug 
const app = express(); // call app

//making the app run on localhost port 3000
app.listen(3000,()=>{
    console.log("This is the port 3000 runs!!!");
})

//set up template view engine
app.set("view engine","pug");

// set the static assets on static routes with express static method 
app.use("/static",express.static('public'));

//include home routes and set it routes to home by default
const index = require("./routes");
app.use(index);

//include project routes and set it routes to project by default
const project = require("./routes/project");
app.use("/project",project);

//include about routes and set it routes to about by default
const about = require("./routes/about");
app.use("/about",about);

//create error with 404
app.use((req,res,next)=>{
    const error = new Error("Page Not Found! Please Double Check Your Code");
    error.status = 404;
    next(error);
})

//handle error with both 404 and 500
app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    //add the dynamic error message with logic
    if(res.statusCode === 500){
        err.status = 500;
        err.message = "There is an Error Occurs! Please Double Check Your Code";
    }else{
        console.log("HTTP Error Code 404,Page Not Found!");
    }
    
    res.locals.error = err;
    res.render("error");
})



