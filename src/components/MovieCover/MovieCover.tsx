import React from "react";
import { Movie } from "types/Movies";
import { Link } from "react-router-dom";

type Props = {
  movie: Movie;
};

const MovieCover = ({ movie }: Props) => {
  return (
    <Link to={`/details/${movie.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        width="200px"
        height="400px"
        alt={movie.title}
        title={movie.title}
      />
    </Link>
  );
};

export default MovieCover;
