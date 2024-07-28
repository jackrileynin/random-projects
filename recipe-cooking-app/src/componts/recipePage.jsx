import React from "react"; 

function RecipeList({recipes}){
    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.idMeal}>
                    <h3>{recipe.strMeal}</h3>
                    <img src={recipe.strMealThumb} alt="food" />
                </div>
            ))}
        </div>
    );
    
    
}


export default RecipeList;