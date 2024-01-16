const http = require('node:http')

http.createServer(0, () => {
  console.log('http server is working!')
})
