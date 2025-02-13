const tmdbKey = 'e32dd976e2dba4396a9159919d3bfd6d';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams = 'api_key=tmdbKey';
  const urlToFetch = `${tmdbBaseUrl},${genreRequestEndpoint},${requestParams}`
  try{
  const response = await fetch(urlToFetch) // Aguarda a conversão da resposta para JSON
  if (response.ok){
    const jsonResponse = await response.json;
    console.log(jsonResponse);
    const genres = jsonResponse.genres;
    // Verifica se a propriedade 'genres' existe no objeto jsonResponse
    if(jsonResponse.genres)
    console.log(genres)
  }else{
    console.error('Failed to fetch genres:', response.statusText)
  }
  }
  catch(error){
    console.error('Error fetching genres:', error)
  };
};

const getMovies = () => {
  const selectedGenre = getSelectedGenre();

};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;