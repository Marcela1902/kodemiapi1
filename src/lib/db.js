
const mongoose = require('mongoose')
//protocolo 
const DB_USER = 'Marce'
const DB_PASSWORD = 'chela1902'
const DB_HOST = 'septimageneracion-8fazlf.mongodb.net'
const DB_NAME = 'Kodemia'
const url = 'mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}'


function connect(){
    mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:tru})
}


module.exports ={
    connect
}

//del otro lado...
//const db = require('...db.js)
//db() asi se exportamos directo a la funcion
//db.connect
