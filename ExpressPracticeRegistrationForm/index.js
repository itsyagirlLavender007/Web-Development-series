import express from "express";
import { dirname } from "path";//for path stuff since after deploying the path for other people might differ
import { fileURLToPath } from "url";//For url stuff
import bodyParser from "body-parser"
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));//To get the body stuff

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res)=>{
    const UserName = req.body.UserName;
    const userEmail = req.body.email;
    const userPassword = req.body.Pwd;
    res.send(`<h1>Submitted Successfully</h1>
        <p>Username: ${UserName}</p>
        <p>UserEmail: ${userEmail}</p>
        <p>UserPassword: ${userPassword}</p>`);
    console.log(`${UserName}, ${userEmail}, ${userPassword}`);
});

app.listen(port,()=>{
    console.log("Server is working");
});