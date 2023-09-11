const express = require("express");
const { blogs } = require("./model/index");
const app = express();

//database connection
require("./model/index");

//to use ejs file we set this
app.set("view engine", "ejs");

// to get data from website user entered we use this
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  // to get data from database
  const allblogs = await blogs.findAll();
  // ejs file and sending data to file
  res.render("Blog", { allblogs: allblogs });
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

  //   database ma store garney, kei operation huda await + async halney
  await blogs.create({
    title: title,
    subTitle: subTitle,
    description: description,
  });
  res.redirect("/");
});

//single page blogg
app.get("/blog/:id", async (req, res) => {
  const id = req.params.id;
  const singleBlog = await blogs.findAll({ where: { id: id } });
  // console.log(singleBlog);
  res.render("soloBlog", { singleBlog: singleBlog });
});

app.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await blogs.destroy({ where: { id: id } });
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Project Has Started!");
});
