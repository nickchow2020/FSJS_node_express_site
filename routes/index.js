const express = require("express"); //include express
const router = express.Router();    // create router with express.Router()
const { projects } = require("../data"); // graph data from data.json with es6 syntax 

//creaet a root routes and render it's index template
router.get("/",(req,res)=>{
    res.locals.datas = projects;
    res.render("index");
})

//exports router
module.exports = router;