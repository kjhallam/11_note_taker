const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const router = require("express").Router();
const note = require("../db/db.json");

router.get("/api/notes", function (req, res) {
  res.json(note);
});

router.post("/api/notes", function (req, res) {
  req.body.id = uuidv4();
  note.push(req.body);
  fs.writeFile("./db/db.json", JSON.stringify(note), function (err) {
    if (err) throw err;
  });
  res.json(note);
});

router.delete('/api/notes/:id', (req, res) => {
    const removeID = req.params.id;
    for (let i = 0; i < note.length; i++) {
        if (note[i].id === removeID) {
            note.splice(i, 1);
        }  
    }
    fs.writeFile("./db/db.json", JSON.stringify(note), function (err) {
        if (err) throw err;
    });
    removeNote = note;
    res.json(removeNote);

});

module.exports = router;
