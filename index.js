
const server = require('./api/server')


const PORT = 8000

server.listen(8000, () => {
    console.log(`Server is Listeng on ${PORT}`)
})
