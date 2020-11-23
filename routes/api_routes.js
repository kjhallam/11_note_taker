
const fs = require('fs');
const { v8: uuidv8 } = require('uuid');
const router = require('express').Router();

router.get('/notes', function(_req, res){
    //console.log("<<<-----------note----------->>>");
    fs.readFile('./db/db.json', 'utf8', function(err, data){
        if(err){
            console.log(err);
        }
            let note = JSON.parse(data);

             res.json(note);
    });
    
});

router.post('/notes', function(req, res){
    fs.readFile('./db/db.json', 'utf8', function(err,data){
        if(err){
            console.log(err);
        }
        let note = JSON.parse(data);
        req.body.id = uuidv8();
        let newNote = req.body;
        console.log(newNote);
        note.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(note),
        function(err){
            if(err){
                return console.log(err);
            }
            console.log('Success!')
        })
         res.json(note)

    })
});

module.exports = router;
