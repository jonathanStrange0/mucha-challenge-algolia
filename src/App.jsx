import React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  RefinementList,
  Pagination,
  HierarchicalMenu,
  Stats,
} from "react-instantsearch";
import "./App.css";
import Sidebar from "./components/Sidebar";
import StarDisplay from "./components/StarDisplay";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";

import { useNavigate } from "react-router-dom";

const searchClient = algoliasearch(
  "1M0II9JMUH",
  "cbf473b5c28aefe9884cc9be8415b2b9"
);
const Hit = ({ hit }) => {
  const navigate = useNavigate();
  const handleRecipieClick = (e) => {
    e.preventDefault();
    navigate(`/recipe/${hit.id}`, { state: { recipe: hit } });
  };

  return (
    <div className='parent' onClick={handleRecipieClick}>
      <div className='left-content'>
        <h2>{hit.recipe_name}</h2>
        <p>{hit.yield}</p>
        <p>{hit.cook_time}</p>
        <StarDisplay rating={hit.rating} />
      </div>
      <img className='image' src={hit.img_src} alt={hit.recipe_name} />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <InstantSearch indexName='recipes' searchClient={searchClient}>
              <div className='app'>
                <Sidebar className='sidebar' />
                <div className='main-content'>
                  <h1>Jonathan Mucha - Algolia Search Challenge</h1>
                  <h2>Recipe Finder</h2>

                  <SearchBox
                    className='search-box'
                    placeholder='Find Your Favorite Recipe'
                  />
                  <body>
                    <Stats />
                  </body>
                  <Hits hitComponent={Hit} />
                  <Pagination className='pagination' />
                </div>
              </div>
            </InstantSearch>
          }
        />
        {/* Recipe Details Page */}
        <Route path='/recipe/:id' element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
