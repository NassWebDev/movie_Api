const path = "https://image.tmdb.org/t/p/w1280";

const movies = document.querySelector(".movies");
const textmovie = document.querySelector(".namemovie");
const loading = document.querySelector(".loading")

fetchApi();

async function fetchApi(){
    let api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    
    const resp = await fetch(api);
    const respData = await resp.json();

    respData.results.forEach((movie) => {
        const amovie = document.createElement("div");
        amovie.classList.add("amovie");
        const img = document.createElement("img");
        img.classList.add("img");
        img.src = path + movie.poster_path;
        const infosmovies = document.createElement("div");
        infosmovies.classList.add("infosmovies");
        const namemovie = document.createElement("p");
        namemovie.classList.add("namemovie");
        namemovie.textContent = movie.title;
        const mark = document.createElement("p");
        mark.classList.add("mark");
        mark.textContent = movie.vote_average;

        movies.appendChild(amovie);
        amovie.appendChild(img);
        amovie.appendChild(infosmovies);
        infosmovies.appendChild(namemovie);
        infosmovies.appendChild(mark);
    });
}