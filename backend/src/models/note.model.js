const {Schema,model}= require('mongoose')

const noteSchema =  new Schema({
    title: String,
    content:{
        type:String,
        required:true,
        trim:true},
    author:String,
    date:Date
},
    {timeStamps:true}
    )

module.exports = model('Note',noteSchema)