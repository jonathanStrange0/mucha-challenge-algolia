import React from "react";
import {
  RefinementList,
  RangeInput,
  ClearRefinements,
} from "react-instantsearch";
import { Ratings } from "./Rating";
import SidebarFilter from "./SidebarFilter";
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <h1>Filters</h1>
      <SidebarFilter title='Rating'>
        <Ratings attribute='rating' />
      </SidebarFilter>
      <SidebarFilter title='Servings'>
        <RangeInput attribute='servings' />
      </SidebarFilter>
      <ClearRefinements
        translations={{
          reset: "Clear Filters", // Custom label for the button
        }}
        className='clear-refinements'
      />
    </div>
  );
};

export default Sidebar;
