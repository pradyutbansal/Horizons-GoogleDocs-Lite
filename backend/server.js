const express = require('express')
const app = express()

// Example route
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/*', (request, response) => {
  response.sendFile(__dirname + '/build/index.html');
});

app.listen(3000, function () {
  console.log('Backend server for Electron App running on port 3000!')
})