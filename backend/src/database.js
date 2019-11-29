const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI 
            ? process.env.MONGODB_URI 
            : "mongodb://localhost/database";

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log("DB is connected")
});