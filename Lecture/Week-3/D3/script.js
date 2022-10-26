
var list = document.querySelector('.top-poke');
async function getPokeData() {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=10&limit=10");
    var pokeData = await response.json();
    // console.log(pokeData.results[0].name);
    for (let index = 0; index < pokeData.results.length; index++) {
        console.log(pokeData.results[index].name);
        var listItem = document.createElement('li');
        listItem.innerText = pokeData.results[index].name;
        listItem.appendChild(listItem);        
    }
}
getPokeData();
var pokeImg = document.querySelector('.poke');
async function getPokeOfTheDay() {
    var response = await fetch("https://pokeapi.co/api/v2/ditto");
    var pokeData = await response.json();
    // console.log(pokeData.results[0].name);
    console.log(pokeData.sprites.front_shiny);
    pokeImg.src = pokeData.sprites.front_shiny;
}
getPokeOfTheDay();

async function changeImg() {
    var response = await fetch("https://pokeapi.co/api/v2/ditto");
    var pokeData = await response.json();
    // console.log(pokeData.results[0].name);
    console.log(pokeData.sprites.front_shiny);
    pokeImg.src = pokeData.sprites.front_shiny;
}