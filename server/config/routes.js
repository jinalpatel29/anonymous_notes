var notes = require('../controllers/notes.js')

module.exports = function(app){
    app.get('/all', function(req,res){
        notes.show(req,res);
    })

    app.post('/create', function(req,res){
        notes.create(req,res);
    })

    app.get('/note/:id', function(req,res){
        notes.findNote(req,res);
    })

    app.put('/note/:id', function(req,res){
        notes.update(req,res);
    })

    app.delete('/note/:id', function(req,res){
        notes.destroy(req,res);
    })

}