import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { useLocation, useNavigate } from "react-router-dom";

const RecipeDetails = (props) => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Extract recipe data from state
  const recipe = location.state?.recipe;

  return (
    <div className='recipe-details'>
      <h1>{recipe.recipe_name}</h1>
      <img src={recipe.img_src} alt={recipe.recipe_name} />
      <h2>Preparation Time: {recipe.prep_time}</h2>
      <h2>Cook Time: {recipe.cook_time}</h2>
      <h2>Total Time: {recipe.total_time}</h2>
      <h2>Servings: {recipe.servings}</h2>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Directions</h3>
      <p>{recipe.directions}</p>
      <h3>Rating: {recipe.rating}</h3>
    </div>
  );
};

export default RecipeDetails;
