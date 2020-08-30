const express = require("express");
const router = express.Router();
const { projects } = require("../data");

router.get("/",(req,res)=>{
    res.locals.datas = projects;
    res.render("index");
})


module.exports = router;