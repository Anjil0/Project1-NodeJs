const express = require("express");
const { blogs } = require("./model/index");
const app = express();

//database connection
require("./model/index");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.send("WELCOME TO THE HOMEPAGE")
  res.render("Blog");
});

app.get("/createBlog", (req, res) => {
  // res.send("WELCOME TO Create Blog")
  res.render("createBlog");
});

app.post("/createBlog", async (req, res) => {
  //Mathi bata user ley deko input constant ma haleko
  // const title = req.body.title;
  // const content = req.body.subTitle;
  // const author = req.body.description;
  const { title, subTitle, description } = req.body;
  res.send("Blog Created!");
  //   database ma store garney, kei operation huda await + async halney
  await blogs.create({
    title: title,
    subTitle: subTitle,
    description: description,
  });
});

app.listen(3000, () => {
  console.log("Project Has Started!");
});
