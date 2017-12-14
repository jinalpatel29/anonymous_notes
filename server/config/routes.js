var notes = require('../controllers/notes.js')

module.exports = function(app){
    app.get('/all', function(req,res){
        notes.show(req,res);
    })

    app.post('/create', function(req,res){
        notes.create(req,res);
    })
}