import React from "react";
import "./movie-item.css";
import dummyPoster from "../../assets/images/dummy-poster.png";

const MAX_TEXT_LENGTH = 180;

const Movie = ({ data, onLike, isLiked }) => {
  const { id, title = "", storyline = "", posterurl = "" } = data;
  const aboutText = storyline.length > MAX_TEXT_LENGTH ? `${storyline.slice(0, MAX_TEXT_LENGTH)}...` : storyline;
  return (
    <div className="movie">
      <div className="movie-inner">
        <img src={posterurl || dummyPoster} alt={title} className="movie-img" />
        <div className="movie-details">
          <h2 className="movie-title title">{title}</h2>
          <div className="movie-about">{aboutText}</div>
          <button
            className={`button movie-fav__btn background-image ${isLiked && "movie-fav-active__btn"}`}
            onClick={() => {
              onLike(id, data);
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
