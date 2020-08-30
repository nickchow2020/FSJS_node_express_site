const express = require("express");
const pug = require("pug");
const app = express();


app.set("view engine","pug");
app.use("/static",express.static('public'));

const index = require("./routes");
app.use(index);

const project = require("./routes/project")
app.use("/project",project);


app.listen(3000,()=>{
    console.log("This is the port 3000 runs!!!");
})