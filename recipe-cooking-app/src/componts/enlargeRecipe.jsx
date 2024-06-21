import React from "react";
import { useState } from "react";
import recipeList from "./recipePage";
function NavBar(categories){
        const [expand, setExpand] = useState(false); 
        console.log(categories);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories.strCategory}`)
return (<div>
    <main className="main-background">
    <nav className="center-nav">
        {categories.map((categorie) => {
            return <div className="list-item">
               <button onClick={setExpand(expand === true)}> <h3>{categorie.strCategory}</h3> </button> 
                {expand === true ? <div>
                    <p>{categorie.strCategoryDescription}</p>
                    <img src={categorie.strCategoryThumb} alt="food" />
                    <recipeList  />  
                </div> :
                <div className="closed-dv">
                    
            </div>

        }
        </div>
        }
        )}
    

</nav>
</main>
 
</div>


)
}



export default NavBar;