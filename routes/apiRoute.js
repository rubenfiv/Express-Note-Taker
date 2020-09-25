const router = require("express").Router();
const db = require("../db/db.json")
let id = db.length + 1
const fs = require("fs")

router.get("/api/notes", function(req, res){
res.json(db)
})

router.post("/api/notes", function(req, res){
    req.body.id = id++
    db.push(req.body)
    fs.writeFile("./db/db.json", JSON.stringify(db), function(){
        res.json(db)
    })

})

router.delete("/api/notes/:id", function(req, res){
    const id = req.params.id
    console.log(id);

    for(var i = 0; i < db.length; i++){
        if (db[i].id ===  parseInt(id)){
            db.splice(i, 1)
        }
    }
    fs.writeFile("./db/db.json", JSON.stringify(db), function(){
        res.json(db)
    });
    
})
module.exports = router
