const net = require('node:net') // conexiones mas rapidas que http

function findPort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer(desiredPort)

    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        findPort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findPort }
