const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("index")
});

app.listen(5050, () => {
    console.log("Servidor ligado!")
});