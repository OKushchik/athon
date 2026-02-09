const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('Test!')
})

app.get('/healz', (req, res) => {
  res.send('healz!')
})
app.get('/one', (req, res) => {
  res.send('one!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
