const router = require ('express').Router()
const fs = require ('fs')
router.get('/notes', (req,res) => {
   const notes = fs.readFileSync('./db/db.json', 'utf8')
   res.json(notes)
})

module.exports = router