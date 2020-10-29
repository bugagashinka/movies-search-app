import "./search.css";
import React, { useState } from "react";

const SearchBar = ({ onSearch, onClear }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onSearchChange = ({ target }) => setSearchQuery(target.value);

  const onSearchHandler = () => onSearch(searchQuery);

  const onClearHandler = () => {
    setSearchQuery("");
    onClear();
  };

  return (
    <section className="search-form">
      <div className="search-input">
        <input
          className="search-form__input"
          value={searchQuery}
          onChange={onSearchChange}
          type="text"
          placeholder="Search for movie..."
        />
        <button className="button search-input__clear-btn" onClick={onClearHandler}>
          <span role="img" className="background-image clear-btn__img"></span>
        </button>
      </div>
      <button className="button search-form__btn" onClick={onSearchHandler}>
        Search
      </button>
    </section>
  );
};

export default SearchBar;
