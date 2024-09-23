const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    let siteName = "Addidas";
    let searchText = "dekhoo idhar"
  res.render('index', { siteName: siteName, searchText : searchText }); // Specify the root directory for the file
});
app.get('/blog/:slug', (req, res) => {
    let titleName = "Addidas now or nevver";
    let blogcontent = "its very good brand"
  res.render('blogpost', { root: __dirname }); // Specify the root directory for the file
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});