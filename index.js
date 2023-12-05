window.addEventListener("DOMContentLoaded", function(){
    const API_KEY = "b8f9e80037ad753def7c06bc57165e9b" 


// define the function 
async function searchMovies(query) {
 const resultsContainer = document.getElementById("search-result");

  resultsContainer.innerHTML="";
  const API_URL=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
   
  try{
    const response = await fetch(API_URL);
    const data = await response.json();

    const movies = data.results;

    movies.forEach(movie => {
        const listitem = document.createElement("li");
        listitem.className = "movie-item";
         
       const image = document.createElement("img"); 
       image.src=`https://image.tmdb.org/t/p/w200${movie.poster_path}`;
       image.alt= movie.title;

       const title = document.createElement("h2");
       title.textContent = movie.title;

       listitem.appendChild(image);
       listitem.appendChild(title);
       resultsContainer.appendChild(listitem);
    });
  }
  catch(error){
      console.log("Failed to load movies,try again");
  }
}

const search = document.getElementById("search");
const searchInput = document.getElementById("search-input");

//Add an on click event to the search button 
search.addEventListener("click", ()=>{
    searchMovies(searchInput.value);
    console.log(searchInput.value);

})
//Add an on click event to the search input
searchInput.addEventListener("keyup", ()=>{
    searchMovies(searchInput.value);
})


})