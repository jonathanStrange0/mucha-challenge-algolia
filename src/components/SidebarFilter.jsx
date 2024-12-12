import React from 'react';
import './SidebarFilter.css';

const SidebarFilter = ({ title, children }) => {
  return (
    <div className="sidebar-filter">
      <h3 className="sidebar-filter-title">{title}</h3>
      <div className="sidebar-filter-content">{children}</div>
    </div>
  );
};

export default SidebarFilter;