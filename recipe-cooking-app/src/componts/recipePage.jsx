import React from "react"; 
import {Link} from "react-router-dom";
import { useEffect } from "react";

const stylebutton = {
    backgroundColor: "#D4AF37",
    color: "#4A4A4A",
    margin: "10px"
}

const styleForHeader = {
    color: "#4A4A4A"
}
function RecipeList({recipes}){
    
    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.idMeal}>
                    <h3 style={styleForHeader}>{recipe.strMeal}</h3>
                    <p>{recipe.strArea}</p>
                    <button  style={stylebutton}>
                        <Link to={`/instructions/${recipe.idMeal}`}>View Recipe</Link>
                    </button>
                    <img src={recipe.strMealThumb} alt="food" />
                </div>
            ))}
        </div>
    );
    
    
}


export default RecipeList;