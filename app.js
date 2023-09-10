const express = require("express");
const app = express();

//database connection
require("./model/index");


app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // res.send("WELCOME TO THE HOMEPAGE")
    res.render('Blog')
})

app.get('/createBlog', (req, res) => {
    // res.send("WELCOME TO Create Blog")
    res.render('createBlog')

})

app.post('/createBlog', (req, res) => {
    console.log(req.body)
})

app.listen(3000, () => {
  console.log("Project Has Started!");
});
