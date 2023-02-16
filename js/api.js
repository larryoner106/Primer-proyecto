const movieTitle = document.querySelector('.movie__title');
const movieImage = document.querySelector('.movie__image');
const movieDescription = document.querySelector('.movie__description');
const movieRating = document.querySelector('.movie__rating');

const apiKey = '4c36b4706bae2aa2214e2e83eda7a2c7';
const endpoints = [
  `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`, // Fight Club
  `https://api.themoviedb.org/3/movie/278?api_key=${apiKey}`, // The Shawshank Redemption
  `https://api.themoviedb.org/3/movie/238?api_key=${apiKey}`, // The Godfather
  `https://api.themoviedb.org/3/movie/155?api_key=${apiKey}`, // The Dark Knight
  `https://api.themoviedb.org/3/movie/120?api_key=${apiKey}`, // The Lord of the Rings: The Fellowship of the Ring
  `https://api.themoviedb.org/3/movie/603?api_key=${apiKey}`, // The Matrix
  `https://api.themoviedb.org/3/movie/13?api_key=${apiKey}`, // Forrest Gump
  `https://api.themoviedb.org/3/movie/274?api_key=${apiKey}`, // The Silence of the Lambs
  `https://api.themoviedb.org/3/movie/27205?api_key=${apiKey}`, // Inception
  `https://api.themoviedb.org/3/movie/858?api_key=${apiKey}`, // The Lion King
  `https://api.themoviedb.org/3/movie/680?api_key=${apiKey}`, // Pulp Fiction
  `https://api.themoviedb.org/3/movie/629?api_key=${apiKey}`, // The Usual Suspects
  `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`, // Fight Club
  `https://api.themoviedb.org/3/movie/862?api_key=${apiKey}`, // Toy Story
  `https://api.themoviedb.org/3/movie/637?api_key=${apiKey}`, // Schindler's List
  `https://api.themoviedb.org/3/movie/1372?api_key=${apiKey}`, // The Prestige
  `https://api.themoviedb.org/3/movie/98?api_key=${apiKey}`, // Gladiator
  `https://api.themoviedb.org/3/movie/122?api_key=${apiKey}`, // The Lord of the Rings: The Two Towers
  `https://api.themoviedb.org/3/movie/11324?api_key=${apiKey}`, // Up
  `https://api.themoviedb.org/3/movie/500?api_key=${apiKey}`, // Reservoir Dogs
  
];


let currentMovie = 0;

function rotateMovies() {
  const endpoint = endpoints[currentMovie];

  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      movieTitle.textContent = data.title;
      movieImage.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
      movieDescription.textContent = data.overview;
      movieRating.textContent = `Rating: ${data.vote_average}`;
    })
    .catch(error => {
      console.error('Error fetching movie:', error);
    });

  currentMovie = (currentMovie + 1) % endpoints.length;
}

rotateMovies();
setInterval(rotateMovies, 10000); // Cambia de película cada 10 segundos
