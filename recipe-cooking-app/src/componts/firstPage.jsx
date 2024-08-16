import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import RecipeList from "./recipePage";
import NavBar from "./enlargeRecipe";


function MainPage(){
  
       const [recipes, setRecipe] = useState([]);
        useEffect(() => {   
            fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setRecipe(data.categories);
                })
                .catch((error) => console.error("Error fetching recipes:", error));
        }, []);
    
   //create a function that will expand the details of the defferent recipes under the categories when clicked
   // make a state variable that will hold the navbar and its changed stated when clicked 
   

 
return (
    

            <NavBar categories={recipes} />

    
)

}

export default MainPage;
