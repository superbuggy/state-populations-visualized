const express = require('express')
const csv = require('csvtojson')

const app = express()
const PORT = 3000

app.set('port', PORT)
app.listen(PORT, startUp)

app.use('/public', express.static('public'))

app.get('/populations', serveJson)
app.get('/', serveHomePage)


function startUp () {
  console.log('🏃 on port', app.get('port'))
}

//Route Handling

function serveHomePage (req, res) {
  res.sendFile(__dirname + '/public/index.html')
}

function serveJson (req, res) {
  csv()
    .fromFile('data/us-state-populations-july-2016.csv')
    .then(jsonData => res.json(jsonData))
    .catch(oopsie => console.error(oopsie))
}
