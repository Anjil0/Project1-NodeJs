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

// to get data from database and render it in homepage
app.get("/", async (req, res) => {
  // to get data from database
  const allblogs = await blogs.findAll();
  // ejs file and sending data to file
  res.render("Blog", { allblogs: allblogs });
});

// this is for uiiii render
app.get("/createBlog", (req, res) => {
  // res.send("WELCOME TO Create Blog")
  res.render("createBlog");
});

// this is for inserting data in database
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

// to delete blog
app.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await blogs.destroy({ where: { id: id } });
  res.redirect("/");
});

// Edit blogs
app.get("/edit/:id", async (req, res) => {
  const id = req.params.id;
  //finding blog to go in prefill edit mode
  const blog = await blogs.findAll({ where: { id: id } });
  res.render("editBlog",{ blog: blog });
});


//this is for updating data 
app.post("/editBlog/:id", async (req, res) => {
  const id = req.params.id;
  const { title, subTitle, description } = req.body;
  await blogs.update(
    {
      title: title,
      subTitle: subTitle,
      description: description,
    },
    { where: { id: id } }
  );
  res.redirect("/blog/"+id);
  
});

// this is to run the port
app.listen(3000, () => {
  console.log("Project Has Started!");
});
