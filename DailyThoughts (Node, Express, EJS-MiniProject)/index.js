import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const thoughts = [];

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index.ejs",{dailythoughts:thoughts});
});

app.post("/submit",(req,res)=>{
    const userThoughts = {
        date: req.body.Date,
        quote: req.body.Quote
    }
    thoughts.push(userThoughts);
    // console.log(`${userThoughts.date} and ${userThoughts.quote}`);
    res.redirect("/");
});

app.get("/info/:id",(req,res)=>{
    const thoughtsHolder = thoughts[req.params.id];
    res.render("info.ejs",{thoughtsHolder});
});

app.post("/delete/:id",(req,res)=>{
    const id = req.params.id;
    thoughts.splice(id, 1);
    res.redirect("/");
})

app.listen(port,()=>{
    console.log(`Server running`);
})