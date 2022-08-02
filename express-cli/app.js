const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.use((req, res, next) => {
  console.log(`${req.method}, ${req.url}, ${Date.now()}`)
  next()
})
app.get('/', (req, res) => {
  res.send('/index')
})
app.get('/register', (req, res) => {
  res.send('/register')
})
app.get('/login', (req, res) => {
  res.send('/login')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
