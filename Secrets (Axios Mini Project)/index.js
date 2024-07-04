// Import express and axios
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

// Express API and port number.
const app = express();
const port = 3000;

// Static files.
app.use(express.static("public"));

// When the user goes to the home page it renders the index.ejs file.
app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs", {
            secret: result.data.secret,
            user: result.data.username,
        });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
  });

// Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
