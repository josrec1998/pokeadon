
import { pokemonArray } from "./data/pokemon.js";

const container = document.querySelector(".card-container");

pokemonArray.forEach((pokem) => {
  const { id, name, types, sprite } = pokem;

  container.innerHTML += `<div>
      <img src="${sprite}" alt="pokepic"></img>
      <h2>${name}</h2>
      <p> ${types}</p>    
      
    </div>`;
container.style.backgroundColor="pink";
container.style.padding="20px";
container.style.border="20px";
container.style.borderBlockColor="grey";
container.style.borderColor="grey";

});
