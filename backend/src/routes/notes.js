const {Router} = require('express')
const {addNote,updateNote,deleteNote,getNote,getNotes} = require('../controllers/notes.controllers')
const router = Router()

router.route('/')
    .get(getNotes)
    .post(addNote)

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router;