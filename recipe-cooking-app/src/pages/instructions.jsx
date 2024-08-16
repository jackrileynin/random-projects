import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Instructions() {
    const { id } = useParams();
    const [instructions, setInstructions] = useState(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.meals && data.meals.length > 0) {
                    setInstructions(data.meals[0].strInstructions);
                }
            });
    }, [id]);

    return (
        <div>
            <h1>Instructions</h1>
            <p>{instructions ? instructions : "Loading..."}</p>
            <button type="button">
                <Link to={"/"} > Back </Link>
            </button>
        </div>
    );
}

export default Instructions;