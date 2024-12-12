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
  console.log(recipe)
  // Fetch or simulate fetching the recipe by id (replace this with an actual API call later)
  // const recipe = {
  //   id: 0,
  //   recipe_name: "Apple-Cranberry Crostada",
  //   prep_time: "30 mins",
  //   cook_time: "25 mins",
  //   total_time: "55 mins",
  //   servings: 8,
  //   yield: "6 to 8 - servings",
  //   ingredients: "3 tablespoons butter, 2 pounds Granny Smith apples...",
  //   directions:
  //     "Heat butter in a large skillet over medium-high heat. Add apples...",
  //   rating: 4.4,
  //   img_src:
  //     "https://www.allrecipes.com/thmb/Tf1wH73bfH6OqlfQySSDtMaP-nw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/517708-5f57072dedb04a389edab3e141517d4d.jpg",
  // };

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
