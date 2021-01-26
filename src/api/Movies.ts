import { Movie } from "types/Movies";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "4cdbdb0d5263e48d74863bf0e3e1bb2f";

async function fetchMovies(): Promise<{ results: Movie[] }> {
  try {
    const response = await fetch(
      `${URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );

    return response.json();
  } catch (e) {
    return e;
  }
}

async function searchMovie({
  query,
}: {
  query: string;
}): Promise<{ results: Movie[] }> {
  try {
    const response = await fetch(
      `${URL}/search/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&query=${query}&include_adult=false&page=1`
    );

    return response.json();
  } catch (e) {
    return e;
  }
}

async function fetchMovie({ id }: { id: string }): Promise<Movie> {
  try {
    const response = await fetch(
      `${URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    return response.json();
  } catch (e) {
    return e;
  }
}

export { fetchMovies, searchMovie, fetchMovie };
