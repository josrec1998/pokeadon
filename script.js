
import { pokemonArray } from "./data/pokemon.js";

const container = document.querySelector(".card-container");

pokemonArray.forEach((pokem) => {
  const { id, name, types, sprite } = pokem;

  container.innerHTML += `<div>
      <img src="${sprite}" alt="pokepic"></img>
      <h2>${name}</h2>
      <p> ${types}</p>    
      
    </div>`;
});
