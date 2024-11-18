 import { movies } from './movies.js';
 document.getElementByld('filmForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o envio do formulário
  // Obtém a idade e categorias selecionadas
  let age = parselnt(document.getElementByld('age').value); // Converte a idade para número
  let categories = document. querySelectorAll('input[name="category"]:checkbox');
  let selectedCategories = [];
  for (let i = 0; i < categories.length; i ++) {
   selectedCategores.push(categories[i].value);
  } 
 // Filtra os filmes com base na idade e categorias
 let filteredMovies;
 if (age >=1 && age <=9) {
  // Filtra filmes adequados para idade de 0 a 9
  filteredMovies = movies.filter(
    (movie) =>
      movie.ageRating <= 9 && selectedCategories.includes(movie.gerne)
  );
 } else {
  // Filtra filmes com base na categorias e idade
  filteredMovies = movies.filter(
    (movies) =>
      selectedCategories.includes(movie.genre) && movie.ageRanting <= age
  );
 }
 // Limpa os resultados anteriores 
 let movieResults = document.getElementByld('movieRults');
 movieResults.innerHTML =";

 //Exibe os filmes
 for (let i = 0; i < filteredMovies.length; i++) {
  let movie = filteredMovies[i];
  let movie Div = document.createElement('div');
  movieDiv.classList.add('movie');
  movieDiv.innerHTML =
   <h3>${movie.title}</h3>
   <p><strong>Gênero:</strong> ${movie.genre}</p>
   <p><strong>Sinopse:</strong> ${movie.synopsis}</p>
   <iframe width="560" height="315" src="${movie.trailer}"
   frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
picture-in-picture'allowfullscreen></iframe>
  ';
  movieResults.appendChild(movieDiv);
 }
 // Se não houver filmes compatíveis
 if (filteredMovies.length === 0) {
    movieResults.inneHTML = '<p>Nenhum fime encontrado para as categorias
selecionadas.</p>';
 }
});
