const express = require("express"); // include express
const router = express.Router();    // create router with express.Router()
const { projects } = require("../data"); // getting project data from data.json

//create a project route by default and having it's id property
router.get("/:id",(req,res)=>{
    res.locals.datas = projects;
    const idValue = parseFloat(req.params.id);
    const projectData = projects.find(({id}) => id === idValue)
    res.render("project",{projectData});
})

//export router
module.exports = router;