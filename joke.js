let jokecontainer= document.getElementById("joke")
let btn=document.getElementById("btn")
let url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getjoke= () =>{
    // e.preventDefault();
    fetch(url)
    .then(data=>data.json())
    .then(item=>{
        jokecontainer.textContent=` ${item.joke}`
    });
}
btn.addEventListener("click",getjoke)
getjoke();