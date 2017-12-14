var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    show: function (req, res) {
        Note.find({}).sort({ createdAt: -1 }).exec(function(err, notes) {
            if(err){
                res.json({"status":"error"})
            } else {
                res.send(notes);
            }
        });       
            // .then(notes =>  res.json(notes))
            // .catch(error => console.log(error))
        },  

    create: function (req, res) {
        console.log(req.body);
        Note.create(req.body)      
            .then(note => res.json(note))
            .catch(error => console.log(error));
    }
}