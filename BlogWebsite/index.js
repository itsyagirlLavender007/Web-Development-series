import express from "express"
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const posts = [];


app.set('view engine', 'ejs'); //Will look for ejs file 
app.use(express.static("public"));//Allow to use css 
app.use(bodyParser.urlencoded({ extended: true }));//Help fetch the content in our html body


app.get("/",(req,res)=>{
    res.render("index.ejs", { posts: posts }); //Renders the homepage and also the posts
});


app.get('/new', (req, res) => {
    res.render('new'); //Takes us to a page where we can create new blog post
});


app.post("/submit",(req,res)=>{
    const post = {
        title: req.body.title, //Fetches blog title
        content: req.body.content //Fetches blog body
    };
    posts.push(post); //Pushes the post content into the posts array we created
    res.redirect('/'); //Redirectes the user to the homepage
});

app.get('/post/:id', (req, res) => { //Take us to show the blogs that are posted
    const post = posts[req.params.id]; // Gets the specific post at the index of the id 
    res.render('post', { post: post }); //Renders the page 
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);//Gets the port for you to follow
});