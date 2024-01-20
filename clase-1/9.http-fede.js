const http = require('node:http')
const { findPort } = require('./10-free-port-fede')

const server = http.createServer((req, res) => {
  console.log('request made')
  res.end('hola mundo')
})

const PORT = 3003

findPort(PORT).then(port => {
  server.listen(port, () => {
    console.log(`server is on! you can go on ${server.address().port}`)
  })
})
