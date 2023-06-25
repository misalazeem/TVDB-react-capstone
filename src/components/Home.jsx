import React, { useState } from 'react';
import '../styles/Home.css';
import { useSelector } from 'react-redux';
import Show from './Show';

function Home() {
  const categories = useSelector((state) => state.shows.categories);
  const allCategories = ['All', ...categories];
  const shows = useSelector((state) => state.shows.Shows);
  const bgColors = ['#4972bf', '#3f63a6'];

  const [selectedCategory, setSelectedCategory] = useState('All'); // hook to filter selected category

  const filteredShows = selectedCategory === 'All' ? shows : shows.filter((show) => show.category.includes(selectedCategory));
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <div className="hero">
        <h1>TVDB</h1>
        <div className="filter">
          <span>Browse by Category</span>
          <select onChange={handleCategoryChange}>
            {allCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="shows-container">
        <div className="shows-grid">
          {filteredShows.map((show, index) => (
            <Show key={show.id} Show={show} backgroundColor={bgColors[index % bgColors.length]} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
