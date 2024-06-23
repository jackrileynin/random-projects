import React, { useEffect } from "react";
import { useState } from "react";
import RecipeList from "./recipePage";
function NavBar({categories}){
        const [expand, setExpand] = useState(false); 
        const [recipeData, setRecipe] = useState([0]);
        console.log(categories);
       const fetchCall = () =>{ fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories.strCategory}`)
        .then((res) => {
             res.json
        }
        ).then((data) => {
            console.log(data);
            setRecipe(data = data.meals);
        });
    }
    useEffect(() => {
        if (expand === true){
            fetchCall();
        }
    }
    , [expand]);
return (<div>
    <main className="main-background">
    <nav className="center-nav">
        {categories.map((categorie) => {
            return <div className="list-item">
                <button onClick={() => setExpand(!expand)}> <h3>{categorie.strCategory}</h3> </button> 
                { expand && ( <div>
                    <p>{categorie.strCategoryDescription}</p>
                    <img src={categorie.strCategoryThumb} alt="food" />
                    <recipeList recipes = {recipeData} />
               
                    
            </div>

                )}
         
        </div>

        }

        )}
    

    

</nav>
</main>
 
</div>


)
}



export default NavBar 