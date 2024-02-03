// Obtenemos los datos de todos los pokemon 
/*fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(json => {
            printPokemons(json.results);
        });
*/

async function getTrasnlatedTypeName(name){
  const obj = await getData(`https://pokeapi.co/api/v2/type/${name}`);
  for (let name of obj.names){
    if(name.language.name == 'es'){
      return name.name;
    }
  }
}

async function getData(url){
  const response = await fetch(url);
  const json = await response.text();
  return JSON.parse(json);
}

// Pinta todos los pokemos insertando un HTML dentro del #container
function printPokemons(pokemons) {
 
  const container = document.getElementById('container')
  pokemons.forEach(pokemon => {
    container.innerHTML =  container.innerHTML = `
    ${container.innerHTML}
    <div class="card">
    <img src="https://pokeres.bastionbot.org/images/pokemon/${getPokemonId(pokemon.url)}.png"/>
    <span>Nº.${getPokemonId(pokemon.url)}</span>
    <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
    </card>
  `;
  });
}

// En esta ruta de la API no nos viene el id de cada pokemon, pero si que nos viene
// una URL, para poder obtener todos los datos de ese pokemon, la cual contiene su ID
// así que le extraigo el ID a la URL
function getPokemonId(url) {
  return url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/','')
}

//Cambiar el tema de la web
var ctema = document.getElementById("tema") 
ctema.style.cursor = "pointer"
 var dark = false
 
ctema.addEventListener("click", ()=>{

if (dark) {
    document.body.style.backgroundColor = "white";
    ctema.textContent = "Cambiar al modo claro";
    dark=false

} else {
    document.body.style.backgroundColor = "darkgrey";
    ctema.textContent = "Cambiar al modo oscuro";
    ctema.style.color ="black"
    dark= true
}


});