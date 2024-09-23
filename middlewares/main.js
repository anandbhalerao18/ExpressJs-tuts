const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
// app.use(express.static('public'))

//Middleware 1
app.use((req, res, next)=>{
    fs.writeFileSync
    console.log(`${Date.now()} is a  ${req.method}`);

    // res.send("middlware 1")
    next();
})
// middleware 2
app.use((req, res, next)=>{
    console.log('m2');
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello this is about page!')
})
app.get('/contact', (req, res) => {
  res.send('Hello this is contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})