
var mongoose = require('mongoose');

var NoteSchema =  new mongoose.Schema({
    text: {type: String, required: true, minlength: 3 },
    author:{type: String, required: true, unique:true, minlength:2}
},{timestamps: true});

var Note = mongoose.model('Note', NoteSchema);