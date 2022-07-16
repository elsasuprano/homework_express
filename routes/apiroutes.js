const router = require ('express').Router()
const { v4: uuidv4 } = require('uuid');
const fs = require ('fs')
const path = require ('path');


router.get('/notes', (req,res) => {
   const notes = JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json'), 'utf8'))
   res.json(notes)
})

router.post('/notes', (req,res) => {
   const notes = JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json'), 'utf8'))
   const newNotes = {
      id: uuidv4(), 
      title: req.body.title, 
      text: req.body.text,
   }
   notes.push(newNotes)
   fs.writeFileSync(path.join(__dirname,'../db/db.json'),JSON.stringify(notes))
   res.json(newNotes)
})

router.delete('/notes/:id', (req,res) => {
   const notes = JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json'), 'utf8')) 
   const notesToSave = notes.filter(note => req.params.id != note.id)
   fs.writeFileSync(path.join(__dirname,'../db/db.json'),JSON.stringify(notesToSave))
   res.json(notesToSave)

})
module.exports = router