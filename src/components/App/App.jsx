import "./app.css";
import React from "react";
import Movie from "components/Movie";
import SearchBar from "components/SearchBar";

function App() {
  return (
    <section className="container">
      <SearchBar />
      <section className="search-result">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </section>
    </section>
  );
}

export default App;
