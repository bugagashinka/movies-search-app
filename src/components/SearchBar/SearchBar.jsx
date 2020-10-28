import "./search.css";
import React from "react";

const SearchBar = () => {
  return (
    <section className="search-form">
      <input className="search-form__input" type="text" placeholder="Search for movie..."></input>
      <button className="search-form__btn">Search</button>
    </section>
  );
};

export default SearchBar;
