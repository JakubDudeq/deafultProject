const express = require('express')
const path = require('path')
const router1 = require('./routes/route1')
const router2 = require('./routes/route2')
const app = express()

app.set('views', path.join(__dirname, 'html'))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/router1', router1)
app.use('/router2', router2)

app.listen(8080, function () {
  console.log('Server running on port 8080')
})
