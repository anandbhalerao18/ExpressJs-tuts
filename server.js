const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World56!')
})
app.get('/about', (req, res) => {
  res.send('Hello about!')
})
app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})
// app.get('/blog/introjavascript', (req, res) => {
//   res.send('Hello Javascript!')
// })
// app.get('/blog/intropython', (req, res) => {
//   res.send('Hello Python!')
// })
// app.get('/blog/:slug', (req, res) => {
//   res.send(`Hello ${req.params.slug}  !`);
// })
app.get('/blog/:slug/:second', (req, res) => {
  res.send(`Hello ${req.params.slug} and ${req.params.second} !`);
  console.log(req)
  console.log(req.params) //will output {slug: 'anand'}
  console.log(req.query ) //will output {slug: 'anand'}
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})