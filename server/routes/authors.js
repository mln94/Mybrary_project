const express = require("express");
const router = express.Router();    
const controllers = require("../controllers/controllers") 
const validateAuthor = require("../middlewares/validateAuthor")

router.get("/", (req, res) => {
    res.render("authors/index");
});

router.get("/new", (req, res) => { 
    res.render("authors/new");
});

router.post("/", validateAuthor, controllers.create)

module.exports = router;