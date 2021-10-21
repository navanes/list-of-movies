import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    title: "The Shawshank Redemption",
    genre: { _id: "5b21ca3eeb7f6fbccd471822", name: "Drama" },
    year: 1994,
    numberInStock: 2,
    dailyRentalRate: 9.3,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "The Godfather: Part I",
    genre: { _id: "5b21ca3eeb7f6fbccd471824", name: "Crime" },
    year: 1972,
    numberInStock: 7,
    dailyRentalRate: 9.2,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471841",
    title: "The Godfather: Part II",
    genre: { _id: "5b21ca3eeb7f6fbccd471824", name: "Crime" },
    year: 1974,
    numberInStock: 7,
    dailyRentalRate: 9,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "The Dark Knight",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    year: 2008,
    numberInStock: 7,
    dailyRentalRate: 9,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Schindler's List",
    genre: { _id: "5b21ca3eeb7f6fbccd471822", name: "Drama" },
    year: 1993,
    numberInStock: 5,
    dailyRentalRate: 8.9,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    year: 1984,
    numberInStock: 6,
    dailyRentalRate: 8,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "The Lord of the Rings: The Return of the King",
    genre: { _id: "5b21ca3eeb7f6fbccd471826", name: "Fantasy"  },
    year: 2003,
    numberInStock: 8,
    dailyRentalRate: 8.9,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    year: 2014,
    numberInStock: 7,
    dailyRentalRate: 8.1,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    year: 1999,
    numberInStock: 4,
    dailyRentalRate: 8.1,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    year: 2012,
    numberInStock: 7,
    dailyRentalRate: 8,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471861",
    title: "Fury",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    year: 2014,
    numberInStock: 8,
    dailyRentalRate: 7.6,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471872",
    title: "The Revenant",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    year: 2015,
    numberInStock: 8,
    dailyRentalRate: 8,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471869",
    title: "The Guilty",
    genre: { _id: "5b21ca3eeb7f6fbccd471822", name: "Drama" },
    year: 2021,
    numberInStock: 4,
    dailyRentalRate: 6.3,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471888",
    title: "Django Unchained",
    genre: { _id: "5b21ca3eeb7f6fbccd471822", name: "Drama" },
    year: 2012,
    numberInStock: 4,
    dailyRentalRate: 8.4,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471803",
    title: "The Old Guard",
    genre: { _id: "5b21ca3eeb7f6fbccd471826", name: "Fantasy"  },
    year: 2020,
    numberInStock: 8,
    dailyRentalRate: 6.7,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471895",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    year: 2005,
    numberInStock: 7,
    dailyRentalRate: 6.9,
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find((m) => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
