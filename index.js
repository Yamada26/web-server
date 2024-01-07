const express = require("express");
const path = require("path");
const app = express();

// req.bodyを使えるようにするおまじない
app.use(express.urlencoded({ extended: false }));

// 静的なページ
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", function (req, res) {
//   console.log(req);
//   res.send("トップページ");
// });

app.post("/api/v1/quiz", function (req, res) {
  const answer = req.body.answer;

  if (answer === "2") {
    // res.send("正解!");
    res.redirect("/correct.html");
  } else {
    // res.send("不正解");
    res.redirect("/wrong.html");
  }
});

app.listen(3000, function () {
  console.log("I am running!");
});
