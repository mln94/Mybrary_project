const Author = require("../model/model");
const { validationResult } = require("express-validator");

exports.create = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.render("authors/new", {
            author: {name: req.body.name},
            errorMessageValidate: errors.array().map(error => error.msg).join(",")
        });
    } else {
        const author = new Author({name: req.body.name})

        try {
            const newAuthor = await author.save();
            res.redirect("/authors")
        } catch (error) {
            console.log("Error saving author: ", error)
            res.status(500).render("authors/new", {
                author,
                errorMessageCreation: "Failed to crete an new author. Please try again",
            });
        }
    }

};