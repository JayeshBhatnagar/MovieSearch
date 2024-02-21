
let URL = "https://www.omdbapi.com/?apikey=678515c&t=";


const call = document.querySelector(".search")
const heading = document.querySelector(".heading")
const rated = document.querySelector(".rt")
const year = document.querySelector(".yr")
const genre = document.querySelector(".gn")
const time = document.querySelector(".tm")
const actor = document.querySelector(".actr")
const plot = document.querySelector(".plt")
const imdb = document.querySelector(".txt1")
const toma = document.querySelector(".txt2")
const meta = document.querySelector(".txt3")
call.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let movie = document.querySelector(".big input");
    if(movie.value == "")
    alert("enter a valid movie name")
    else{let temp = URL;
    temp=temp+movie.value;
    now(temp);}
})

const now = async(temp)=>{ 
    
    let promise = await fetch(temp);
    let response =await promise.json();
    if(response.Response == 'False')
     alert("enter a valid movie name")
    
    else
    {document.querySelector(".image img").src = await response.Poster;
    heading.innerText = response.Title;
    rated.innerText = response.Rated;
    year.innerText = response.Year;
    genre.innerText = response.Genre;
    time.innerText = response.Runtime;
    plot.innerText = response.Plot;
    actor.innerText = response.Actors;
    imdb.innerText = response.Ratings[0].Value;
    if(response.Ratings[1] == null) toma.innerText = "N/A";
    else toma.innerText = response.Ratings[1].Value;
    if(response.Ratings[2] == null) meta.innerText = "N/A";
    else meta.innerText = response.Ratings[2].Value;}

};
