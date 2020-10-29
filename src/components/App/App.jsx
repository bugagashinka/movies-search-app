import "./app.css";
import React, { useState } from "react";
import Movie from "components/Movie";
import SearchBar from "components/SearchBar";

function App({ movies }) {
  const [favMap, updateFavMap] = useState(new Map());
  const [searchResult, setSearchResult] = useState([]);

  const onSearchHandler = (searchQuery) => {
    const searchPattern = new RegExp(searchQuery, "i");
    const res = movies.filter(({ title }) => title.search(searchPattern) >= 0);
    setSearchResult(res);
  };

  const likeMovie = (likeId, movieData) => {
    updateFavMap((currFavMap) => {
      const newFavMap = new Map(currFavMap.entries());
      if (currFavMap.has(likeId)) {
        newFavMap.delete(likeId);
        return newFavMap;
      }
      return newFavMap.set(likeId, movieData);
    });
  };

  const clearSearchResult = () => setSearchResult([]);

  const favListElements = [...favMap.values()].map((movieData) => {
    return <Movie key={movieData.id} data={movieData} onLike={likeMovie} isLiked={true} />;
  });

  const searchResultElements = searchResult
    .filter(({ id }) => !favMap.has(id))
    .map((movieData) => {
      return <Movie key={movieData.id} data={movieData} onLike={likeMovie} isLiked={false} />;
    });

  return (
    <section className="container">
      <SearchBar onSearch={onSearchHandler} onClear={clearSearchResult} />
      <section className="search-result">
        {favListElements}
        {searchResultElements}
      </section>
    </section>
  );
}

export default App;
