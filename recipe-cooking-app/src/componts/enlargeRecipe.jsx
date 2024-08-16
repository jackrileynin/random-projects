import React, { useEffect, useState } from "react";
import RecipeList from "./recipePage";

function NavBar({ categories }) {
    const [expand, setExpand] = useState(false);
    const [displayCatagoryListOnly, setDisplayCatagoryList] = useState(true);
    const [recipeData, setRecipeData] = useState([]);
    const [chosenCategory, setChosenCategory] = useState("");
    const styling = {
        
        color: "#4A4A4A",
    };

    const fetchCall = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${chosenCategory}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setRecipeData(data.meals);
            })
            .catch((error) => console.error("Error fetching recipes:", error));
    };

    useEffect(() => {
        if (expand) {
            fetchCall();
        }
    }, [expand, chosenCategory]); 

    const handleCategoryClick = (category) => {
        setChosenCategory(category);
        setExpand(!expand);
        setDisplayCatagoryList(!displayCatagoryListOnly);
    };
    const styles = {
        marginBottom: "8px",
    };   
    const buttonStyle = {
        backgroundColor: "#D4AF37",
        color: "#4A4A4A"
        };  
    
    
    return (
        <div>
            {displayCatagoryListOnly ? (
            <main className="main-background">
                <nav className="center-nav">
                
                        {categories.map((category) => (
                            <div style={styles} className="list-item" key={category.strCategory}>
                                <button  onClick={() => handleCategoryClick(category.strCategory)} style={buttonStyle}>
                                    <h3 style={styling}>{category.strCategory}</h3>
                                </button>
                                
                            </div>
                        ))}
                </nav>
            </main> ) : (
            <main className="main-background">
                <nav className="center-nav">
                   { 
                        categories.map((category) => (
                            <div className="list-item" key={category.strCategory}>
                                <button  onClick={() => handleCategoryClick(category.strCategory)}>
                                    <h3 style={styling}>{category.strCategory}</h3>
                                </button>
                                {expand && chosenCategory === category.strCategory && (
                                    <div className="expanded-recipe-list">
                                        <p style={styling}>{category.strCategoryDescription}</p>
                                        <img src={category.strCategoryThumb} alt="food" />
                                        <RecipeList recipes={recipeData} />
                                    </div>
                                )}
                            </div>
                        ))}
                </nav>
            </main>
            )}
        </div>
     ); 

}
    

export default NavBar;
