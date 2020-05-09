const server = require('./src/server')
cost db = require('./src/lib/db')

function main (){
    await db.connect()
    console.log('db connnected')


server.listen(8082, () =>{
    console.log('server is running')
})
}

main()
    .then (() =>{
        console.log('server ready')
    })
    .catch(error => console.error('error:',error))