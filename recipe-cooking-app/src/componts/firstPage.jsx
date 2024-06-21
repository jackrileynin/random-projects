import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import RecipePage from "./recipePage";
import NavBar from "./enlargeRecipe";


function MainPage(){
  
       const [recipes, setRecipe] = useState([0]);
        useEffect(() => {   
        fetch(`http://www.themealdb.com/api/json/v1/1/categories.php`)
        .then((res) => {
            return res.json();


        }).then((data) => {
            console.log(data);
            setRecipe(data = data.categories);

        });

    }, []);
    
    console.log(data);
   //create a function that will expand the details of the defferent recipes under the categories when clicked
   // make a state variable that will hold the navbar and its changed stated when clicked 
    
 
return (
    <div> 
        <header className="main-header">

        </header>
       <NavBar categories = {recipes} />

        <footer>

        </footer>
    </div>
)

}

export default MainPage;
