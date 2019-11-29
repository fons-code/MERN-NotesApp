const notesController = {}
const Note = require('../models/note.model');


notesController.getNotes = async (req,res)=> {
    const note = await Note.find()
    res.json(note)}


notesController.addNote = async (req,res) => {
    const {title,content,author,} = req.body;
    const newNote = new Note({title,content,author}) 
    console.log(newNote)
    await newNote.save();
    res.json({message:"note created"})}

notesController.updateNote = async (req,res)=> {
    const {title,content,author} = req.body;
    await Note.findByIdAndUpdate(req.params.id, 
        {title,content,author})
    res.json({message:"note updated"})}

notesController.deleteNote = async (req,res)=> {
    const note = await Note.findByIdAndDelete(req.params.id);
    res.json({message:"note deleted"})}

notesController.getNote = async (req,res)=> {
    const note = await Note.findById(req.params.id)
    res.json(note)}


module.exports = notesController;