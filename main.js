const express = require('express')
const blog = require('./routes/blog')


const app = express()
const port = 3000
app.use(express.static("public"))
app.use('/blog', blog)



app.get('/', (req, res) => {
    console.log("HEY ITS A GET REQ");
    res.send('Hello get!')
}).post('/', (req, res) => {
    console.log("HEY ITS A post REQ");
    res.send('Hello post!')
}).put('/', (req, res) => {
    console.log("HEY ITS A put REQ");
    res.send('Hello put!')
})

app.get("/index",(req, res) => {
    console.log("HEY ITS A index");
    res.sendfile('templates/index.html')
})


app.get("/api",(req, res) => {
    res.json({a:1, b:2, c:3, d:4})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})