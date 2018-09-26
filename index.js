const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/Physijs/examples/body.html');
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
