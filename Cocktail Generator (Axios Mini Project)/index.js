import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get("/", async (req, res) => {
    try{
        const result = await axios.get(API_URL);
        const drinks = result.data.drinks; // Get the array of drinks
        const randomIndex = Math.floor(Math.random() * drinks.length); // Get a random index
        const randomDrink = drinks[randomIndex]; // Select the random drink
        
        // Extract ingredients
        let ingredients = [];
        for (let i = 1; i <= 15; i++) {
            let ingredient = randomDrink[`strIngredient${i}`];
            if (ingredient) {
                ingredients.push(ingredient);
            }
        }

        //Measures
        let measures = [];
        for(let j=1;j <= 15; j++){
            let measure = randomDrink[`strMeasure${j}`];
            if(measure){
                measures.push(measure);
            }
        }

        res.render("index", {
            drink_name: randomDrink.strDrink,
            drink_image: randomDrink.strDrinkThumb,
            ingredients: ingredients,
            drink_instr: randomDrink.strInstructions,
            measures: measures
        });
    }
    catch (error){
        console.log(error.message);
        res.status(500);
    }
});

app.listen(port, () => {
    console.log("Server is running on port 3000");
});