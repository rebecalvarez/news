//Require Mongoose
const mongoose = require("mongoose");
const Note = require("./Note");
// Create Schema class
const Schema = mongoose.Schema;

// Create article schema
const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    saved: {
        type: Boolean,
        required: false
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]

});
// Create the Article model with the ArticleSchema
let Article = mongoose.model("Article", ArticleSchema);

//Export the model
module.exports = Article;