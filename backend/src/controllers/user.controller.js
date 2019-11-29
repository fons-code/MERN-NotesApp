const User = require('../models/user.model')
const userController = {}

userController.addUser = async (req,res) => {
    const {username,email,password} = req.body;
    const newUser = new User({username,email,password})
    await newUser.save();
    res.json({message:'user created'})}

userController.getUsers = async (req,res) => {
    const users = await User.find()
    res.json(users)}

userController.getUser = async (req,res) => {
    const user = await User.findById(req.params.id)
    res.json(user)}

userController.deleteUser = async (req,res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({message:'user deleted'})}

userController.updateUser = async (req,res) => {
    const {username,email,password} = req.body
    const userUpdated = {username,email,password}
    await User.findOneAndUpdate(req.params.id, userUpdated); 
    res.json({message:'user updated'})}


module.exports = userController