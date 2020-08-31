const express = require("express"); // add express 
const router = express.Router(); // create router variable with express.Router()

//create a about routes and render about
router.get("/",(req,res)=>{
    res.render("about")
})

//export router
module.exports = router;