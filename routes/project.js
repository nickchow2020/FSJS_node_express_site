const express = require("express");
const router = express.Router();
const { projects } = require("../data");

router.get("/:id",(req,res)=>{
    res.locals.datas = projects;
    const idValue = parseFloat(req.params.id);
    const projectData = projects.find(({id}) => id === idValue)
    res.render("project",{projectData});
})


module.exports = router;