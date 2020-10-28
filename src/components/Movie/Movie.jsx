import React from "react";
import "./movie-item.css";

const Movie = () => {
  return (
    <div className="movie">
      <div className="movie-inner">
        <img src="" alt="" className="movie-img" />
        <div className="movie-details">
          <h2 className="movie-title title">Title</h2>
          <div className="movie-about">sad asdsad asd asasd asda sadsada asda asd asd asd asd asd asd a</div>
          <button className="button movie-fav__btn background-image"></button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
