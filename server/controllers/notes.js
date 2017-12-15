var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    show: function (req, res) {
        Note.find({}).sort({ createdAt: -1 }).exec(function (err, notes) {
            if (err) {
                res.json({ "status": "error" })
            } else {
                res.json(notes);
            }
        });
    },

    create: function (req, res) {
        Note.create(req.body)
            .then(note => res.json(note))
            .catch(error => console.log(error));
    },

    findNote: function (req, res) {
        Note.findOne({ _id: req.params.id }, function (err, notes) {
            if (err) {
                res.json({ "status": "error" })
            } else {
                res.json(notes);
            }
        });
    },

    update: function (req, res) {
        Note.findByIdAndUpdate(req.params.id, { text: req.body.text, author: req.body.author }, function (err, note) {
            if (err) {
                res.json({ "status": "error" })
            } else {
                res.json(note);                
            }
        })
    },

    destroy: function(req,res){
        console.log("In controllers")
        Note.remove({_id:req.params.id}, function(err, note){
            if (err) {
                console.log(err);
                res.json({ "status": "error" })
            } else {
                res.json(note);                
            }
        })
    }
}